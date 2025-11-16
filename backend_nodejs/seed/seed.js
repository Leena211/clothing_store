const fs = require('fs');
const path = require('path');

// Load environment variables from backend_nodejs/.env
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const mongoose = require('mongoose');

// Import models
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');

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

    console.log('\n\n✅ Product seeding completed!');
    console.log(`📊 Summary:`);
    console.log(`   - Inserted: ${insertedCount} products`);
    console.log(`   - Updated: ${updatedCount} products`);
    console.log(`   - Total processed: ${insertedCount + updatedCount} products`);

    // Seed sample orders
    console.log('\n🛒 Seeding sample orders...');
    await seedOrders();

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

// Seed sample orders
async function seedOrders() {
  try {
    // Get or create test users
    let testUser1 = await User.findOne({ email: 'testuser1@example.com' });
    if (!testUser1) {
      testUser1 = await User.create({
        name: 'Test User 1',
        email: 'testuser1@example.com',
        password: 'password123',
        role: 'user',
      });
      console.log('Created test user 1');
    }

    let testUser2 = await User.findOne({ email: 'testuser2@example.com' });
    if (!testUser2) {
      testUser2 = await User.create({
        name: 'Test User 2',
        email: 'testuser2@example.com',
        password: 'password123',
        role: 'user',
      });
      console.log('Created test user 2');
    }

    // Get sample products
    const products = await Product.find().limit(6);
    if (products.length < 2) {
      console.log('⚠️  Not enough products to create orders. Skipping order seeding.');
      return;
    }

    // Clear existing test orders
    await Order.deleteMany({
      user: { $in: [testUser1._id, testUser2._id] }
    });

    // Create sample order 1 for user 1
    const order1 = await Order.create({
      user: testUser1._id,
      orderItems: [
        {
          product: products[0]._id,
          name: products[0].name,
          image: products[0].images[0]?.url || '',
          price: products[0].price,
          size: products[0].sizes[0]?.size || 'M',
          color: products[0].colors[0] || 'Black',
          quantity: 1,
          totalPrice: products[0].price,
        },
        {
          product: products[1]._id,
          name: products[1].name,
          image: products[1].images[0]?.url || '',
          price: products[1].price,
          size: products[1].sizes[0]?.size || 'L',
          color: products[1].colors[0] || 'Blue',
          quantity: 2,
          totalPrice: products[1].price * 2,
        },
      ],
      shippingAddress: {
        street: '123 Test Street',
        city: 'Test City',
        state: 'Test State',
        zipCode: '12345',
        country: 'India',
      },
      paymentInfo: {
        method: 'credit_card',
        transactionId: `TXN-${Date.now()}-001`,
        status: 'completed',
        paidAt: new Date(),
      },
      taxAmount: Math.round(products[0].price * 0.1),
      shippingAmount: 50,
      totalAmount: products[0].price + (products[1].price * 2) + Math.round(products[0].price * 0.1) + 50,
      orderStatus: 'processing',
      deliveryStatus: 'Pending',
      deliveryUpdates: [
        {
          status: 'Pending',
          updatedAt: new Date(Date.now() - 86400000), // 1 day ago
        },
      ],
    });

    // Create sample order 2 for user 1
    const order2 = await Order.create({
      user: testUser1._id,
      orderItems: [
        {
          product: products[2]._id,
          name: products[2].name,
          image: products[2].images[0]?.url || '',
          price: products[2].price,
          size: products[2].sizes[0]?.size || 'M',
          color: products[2].colors[0] || 'Red',
          quantity: 1,
          totalPrice: products[2].price,
        },
      ],
      shippingAddress: {
        street: '123 Test Street',
        city: 'Test City',
        state: 'Test State',
        zipCode: '12345',
        country: 'India',
      },
      paymentInfo: {
        method: 'debit_card',
        transactionId: `TXN-${Date.now()}-002`,
        status: 'completed',
        paidAt: new Date(),
      },
      taxAmount: Math.round(products[2].price * 0.1),
      shippingAmount: 50,
      totalAmount: products[2].price + Math.round(products[2].price * 0.1) + 50,
      orderStatus: 'shipped',
      trackingNumber: 'TRK123456789',
      estimatedDelivery: new Date(Date.now() + 86400000 * 3), // 3 days from now
      deliveryStatus: 'Shipped',
      deliveryUpdates: [
        {
          status: 'Pending',
          updatedAt: new Date(Date.now() - 172800000), // 2 days ago
        },
        {
          status: 'Processing',
          updatedAt: new Date(Date.now() - 86400000), // 1 day ago
        },
        {
          status: 'Shipped',
          updatedAt: new Date(Date.now() - 43200000), // 12 hours ago
        },
      ],
    });

    // Create sample order 3 for user 2
    const order3 = await Order.create({
      user: testUser2._id,
      orderItems: [
        {
          product: products[3]._id,
          name: products[3].name,
          image: products[3].images[0]?.url || '',
          price: products[3].price,
          size: products[3].sizes[0]?.size || 'S',
          color: products[3].colors[0] || 'White',
          quantity: 1,
          totalPrice: products[3].price,
        },
        {
          product: products[4]._id,
          name: products[4].name,
          image: products[4].images[0]?.url || '',
          price: products[4].price,
          size: products[4].sizes[0]?.size || 'M',
          color: products[4].colors[0] || 'Green',
          quantity: 1,
          totalPrice: products[4].price,
        },
        {
          product: products[5]._id,
          name: products[5].name,
          image: products[5].images[0]?.url || '',
          price: products[5].price,
          size: products[5].sizes[0]?.size || 'L',
          color: products[5].colors[0] || 'Black',
          quantity: 1,
          totalPrice: products[5].price,
        },
      ],
      shippingAddress: {
        street: '456 Sample Avenue',
        city: 'Sample City',
        state: 'Sample State',
        zipCode: '67890',
        country: 'India',
      },
      paymentInfo: {
        method: 'paypal',
        transactionId: `TXN-${Date.now()}-003`,
        status: 'completed',
        paidAt: new Date(),
      },
      taxAmount: Math.round((products[3].price + products[4].price + products[5].price) * 0.1),
      shippingAmount: 0,
      totalAmount: products[3].price + products[4].price + products[5].price + Math.round((products[3].price + products[4].price + products[5].price) * 0.1),
      orderStatus: 'pending',
      deliveryStatus: 'Pending',
      deliveryUpdates: [
        {
          status: 'Pending',
          updatedAt: new Date(),
        },
      ],
    });

    console.log('✅ Sample orders created successfully!');
    console.log(`   - Order 1 (${order1.orderNumber}) for ${testUser1.email} - Status: ${order1.deliveryStatus}`);
    console.log(`   - Order 2 (${order2.orderNumber}) for ${testUser1.email} - Status: ${order2.deliveryStatus}`);
    console.log(`   - Order 3 (${order3.orderNumber}) for ${testUser2.email} - Status: ${order3.deliveryStatus}`);
    console.log('\n📧 Test User Credentials:');
    console.log('   User 1: testuser1@example.com / password123');
    console.log('   User 2: testuser2@example.com / password123');

  } catch (error) {
    console.error('Error seeding orders:', error.message);
    throw error;
  }
}

// Run the seeder
seedProducts();

