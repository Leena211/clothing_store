const fs = require('fs');
const path = require('path');

// Load environment variables from backend_nodejs/.env
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const mongoose = require('mongoose');

// Import Product model
const Product = require('../models/Product');

// Import database connection
const connectDB = require('../config/db');

// Map JSON format to Mongoose schema
function mapProductToSchema(productJson) {
  // Map gender: 'men' -> 'Men', 'women' -> 'Women', 'kids' -> 'Kids'
  const genderMap = {
    'men': 'Men',
    'women': 'Women',
    'kids': 'Kids'
  };

  // Map sizes array to Mongoose format [{size: 'M', stock: 10}, ...]
  // Distribute stock across sizes
  const totalStock = productJson.stock;
  const sizesCount = productJson.sizes.length;
  const stockPerSize = Math.floor(totalStock / sizesCount);
  const remainder = totalStock % sizesCount;

  const sizes = productJson.sizes.map((size, index) => ({
    size: size,
    stock: stockPerSize + (index < remainder ? 1 : 0)
  }));

  // Map image_urls to Mongoose format [{url: '...', alt: '...'}, ...]
  const images = productJson.image_urls.map((url, index) => ({
    public_id: `product_${productJson.id}_${index + 1}`,
    url: url,
    alt: `${productJson.name} - Image ${index + 1}`
  }));

  // Map category to match Mongoose enum if needed
  let category = productJson.category;
  const categoryMap = {
    'T-shirts': 'T-Shirts',
    'Tops': 'T-Shirts',
    'Shirts': 'Shirts',
    'Denim': 'Jeans',
    'Jeans': 'Jeans',
    'Hoodies': 'Sweaters',
    'Jackets': 'Jackets',
    'Formal Wear': 'Shirts',
    'Shoes': 'Shoes',
    'Heels': 'Shoes',
    'Footwear': 'Shoes',
    'Accessories': 'Accessories',
    'Handbags': 'Bags',
    'Dresses': 'Dresses',
    'Kurti': 'Dresses',
    'Saree': 'Dresses',
    'Ethnic Wear': 'Dresses', // Map Ethnic Wear to Dresses
    'Boys wear': 'T-Shirts',
    'Girls wear': 'Dresses',
    'Winter wear': 'Jackets'
  };

  if (categoryMap[category]) {
    category = categoryMap[category];
  } else {
    // If category not in map, log warning and use a default
    console.warn(`Warning: Category "${category}" not mapped, using original value`);
  }

  return {
    name: productJson.name,
    description: productJson.description,
    price: productJson.price, // This is the discount_price in user's schema
    originalPrice: productJson.discount_price, // This is the base price
    category: category,
    gender: genderMap[productJson.gender] || 'Unisex',
    sizes: sizes,
    colors: productJson.colors,
    images: images,
    rating: productJson.rating,
    inStock: productJson.stock > 0,
    numReviews: Math.floor(productJson.rating * 10) // Generate review count based on rating
  };
}

// Main seeding function
async function seedProducts() {
  let insertedCount = 0;
  let updatedCount = 0;

  try {
    // Connect to database
    console.log('Connecting to MongoDB...');
    await connectDB();

    // Read products.json
    const productsPath = path.join(__dirname, 'products.json');
    console.log(`Reading products from ${productsPath}...`);
    
    if (!fs.existsSync(productsPath)) {
      throw new Error(`Products file not found at ${productsPath}`);
    }

    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    console.log(`Found ${productsData.length} products to process...\n`);

    // Process each product
    for (const productJson of productsData) {
      try {
        const productData = mapProductToSchema(productJson);
        
        // Check if product exists by custom id field (we'll use name as unique identifier)
        // Since Mongoose uses _id, we'll check by name or use findOneAndUpdate with upsert
        // For idempotency, we'll use the JSON id stored in a custom field or use name
        
        // Try to find by name first
        const existingProduct = await Product.findOne({ name: productData.name });
        
        if (existingProduct) {
          // Update existing product
          await Product.findByIdAndUpdate(
            existingProduct._id,
            { $set: productData },
            { new: true, runValidators: true }
          );
          updatedCount++;
          process.stdout.write(`\rUpdated: ${updatedCount}, Inserted: ${insertedCount}`);
        } else {
          // Insert new product
          await Product.create(productData);
          insertedCount++;
          process.stdout.write(`\rUpdated: ${updatedCount}, Inserted: ${insertedCount}`);
        }
      } catch (error) {
        console.error(`\nError processing product ID ${productJson.id}: ${error.message}`);
        // Continue with next product
      }
    }

    console.log('\n\n✅ Seeding completed!');
    console.log(`📊 Summary:`);
    console.log(`   - Inserted: ${insertedCount} products`);
    console.log(`   - Updated: ${updatedCount} products`);
    console.log(`   - Total processed: ${insertedCount + updatedCount} products`);

  } catch (error) {
    console.error('\n❌ Error during seeding:', error.message);
    console.error(error.stack);
    process.exit(1);
  } finally {
    // Close database connection
    try {
      await mongoose.connection.close();
      console.log('\n🔌 Database connection closed.');
    } catch (closeError) {
      console.error('Error closing connection:', closeError.message);
    }
    process.exit(0);
  }
}

// Run the seeder
seedProducts();

