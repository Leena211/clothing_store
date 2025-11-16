import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { getFeaturedProducts, mockCategories } from '../../utils/mockData';

const HomeContainer = styled.div`
  padding: ${theme.spacing.lg} 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['5xl']} ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['5xl']};
  color: ${theme.colors.text};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1485462537746-965f33f7b6f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
  
  * {
    position: relative;
    z-index: 1;
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 2.8rem;
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 2.2rem;
    }
  }
  
  p {
    font-size: 1.4rem;
    max-width: 700px;
    margin: 0 auto ${theme.spacing.xl};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.md};
    font-weight: 600;
    text-decoration: none;
    transition: ${theme.transitions.default};
    box-shadow: ${theme.shadows.medium};
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: ${theme.shadows.large};
    }
    
    svg {
      margin-left: ${theme.spacing.sm};
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  font-size: 2rem;
  color: ${theme.colors.text};
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.primary};
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xxl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
  }
`;

const CategoryCard = styled(Link)`
  position: relative;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: ${theme.colors.white};
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows.small};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
    
    img {
      transform: scale(1.05);
    }
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${theme.transitions.default};
  }
  
  .category-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${theme.spacing.md};
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    
    h3 {
      margin: 0;
      font-size: 1.2rem;
    }
    
    p {
      margin: ${theme.spacing.xs} 0 0;
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xxl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
  }
`;

const ProductCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${theme.shadows.sm};
  transition: ${theme.transitions.default};
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
    
    .product-image {
      img {
        transform: scale(1.05);
      }
    }
    
    .add-to-cart {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .product-image {
    height: 250px;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: ${theme.transitions.default};
    }
    
    .discount-badge {
      position: absolute;
      top: ${theme.spacing.sm};
      right: ${theme.spacing.sm};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      border-radius: ${theme.borderRadius.xs};
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  
  .product-info {
    padding: ${theme.spacing.md};
    
    h3 {
      margin: 0 0 ${theme.spacing.xs};
      font-size: 1rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .price {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
      
      .current-price {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${theme.colors.primary};
      }
      
      .original-price {
        font-size: 0.9rem;
        text-decoration: line-through;
        color: ${theme.colors.textSecondary};
      }
    }
    
    .rating {
      display: flex;
      align-items: center;
      color: ${theme.colors.warning};
      font-size: 0.9rem;
      margin-bottom: ${theme.spacing.sm};
      
      .reviews {
        color: ${theme.colors.textSecondary};
        margin-left: ${theme.spacing.xs};
        font-size: 0.8rem;
      }
    }
  }
  
  .add-to-cart {
    position: absolute;
    bottom: ${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    opacity: 0;
    transition: ${theme.transitions.default};
    box-shadow: ${theme.shadows.small};
    
    &:hover {
      background-color: ${theme.colors.secondary};
    }
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  margin: ${theme.spacing.xl} auto ${theme.spacing.xxl};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: 500;
  transition: ${theme.transitions.default};
  max-width: 200px;
  
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts(8);
  const taglines = [
    "Step Into Your Style",
    "Where Fashion Finds You",
    "Wear Confidence Every Day",
    "Classy · Trendy · You",
    "Find Your Perfect Look"
  ];
  const [currentTagline, setCurrentTagline] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);
  
  // Render star rating
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaRegStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return <>{stars}</>;
  };

  return (
    <HomeContainer className="container">
      <HeroSection>
        <h1>FashionHub</h1>
        <p>{taglines[currentTagline]}</p>
        <Link to="/shop" className="cta-button">
          Discover More <FaArrowRight />
        </Link>
      </HeroSection>
      
      <div className="container">
        <SectionTitle>Shop by Category</SectionTitle>
        <CategoriesGrid>
          {mockCategories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} to={`/category/${category.id}`}>
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <p>{category.productCount} items</p>
              </div>
            </CategoryCard>
          ))}
        </CategoriesGrid>
        
        <SectionTitle>Featured Products</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <div className="discount-badge">-{product.discount}%</div>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price">
                  <span className="current-price">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="original-price">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="rating">
                  {renderRating(product.rating)}
                  <span className="reviews">({product.reviewCount})</span>
                </div>
                <button className="add-to-cart">
                  <FaShoppingBag /> Add to Cart
                </button>
              </div>
            </ProductCard>
          ))}
        </ProductsGrid>
        
        <ViewAllButton to="/products">
          View All Products
        </ViewAllButton>
      </div>
    </HomeContainer>
  );
};

export default Home;
