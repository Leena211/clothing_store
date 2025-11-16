import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, NavLink as RouterNavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { theme } from '../../styles/theme';

// Styled Components
const HeaderContainer = styled.header`
  background-color: ${theme.colors.surface};
  box-shadow: ${theme.shadows.sm};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: ${theme.zIndex.sticky};
  transition: ${theme.transitions.default};
  
  &.scrolled {
    box-shadow: ${theme.shadows.md};
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
`;

const HeaderTopBar = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  padding: ${theme.spacing[1]} 0;
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  a {
    color: ${theme.colors.white};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      opacity: 0.9;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing[4]} 0;
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.accent};
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  letter-spacing: 1px;
  
  span {
    color: ${theme.colors.textPrimary};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[6]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: ${theme.colors.surface};
    box-shadow: ${theme.shadows.xl};
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacing[8]} ${theme.spacing[6]};
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: ${theme.transitions.default};
    z-index: ${theme.zIndex.modal};
    overflow-y: auto;
  }
`;

// Extend NavLink to handle both Link and div for dropdowns
const NavLinkBase = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  font-family: ${theme.fonts.secondary};
  font-weight: ${theme.fontWeights.medium};
  color: ${({ $isActive }) => $isActive ? theme.colors.primary : theme.colors.textPrimary};
  text-decoration: none;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.primary};
    transform: translateX(-50%);
    transition: ${theme.transitions.default};
  }
  
  &:hover, 
  &[aria-current="page"] {
    color: ${theme.colors.primary};
    
    &::after {
      width: calc(100% - ${theme.spacing[6]});
    }
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    
    &::after {
      display: none;
    }
  }
`;

// Add a styled div for dropdown toggle that looks like NavLink
const DropdownToggle = styled.div<{ $isActive: boolean }>`
  ${props => props.$isActive ? 'color: #6C63FF;' : 'color: inherit;'}
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  transition: color 0.2s ease;
  
  &:hover {
    color: #6C63FF;
  }
`;

const NavDropdown = styled.div`
  position: relative;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background-color: ${theme.colors.surface};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.lg};
    padding: ${theme.spacing[2]} 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: ${theme.transitions.default};
    z-index: ${theme.zIndex.dropdown};
    
    a {
      display: block;
      padding: ${theme.spacing[2]} ${theme.spacing[4]};
      color: ${theme.colors.textSecondary};
      text-decoration: none;
      transition: ${theme.transitions.default};
      
      &:hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.background};
      }
    }
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
    
    .dropdown-menu {
      position: static;
      box-shadow: none;
      opacity: 1;
      visibility: visible;
      transform: none;
      padding: 0;
      padding-left: ${theme.spacing[4]};
      margin-top: ${theme.spacing[2]};
      border-left: 2px solid ${theme.colors.background};
      
      a {
        padding: ${theme.spacing[2]} ${theme.spacing[3]};
      }
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  margin-left: ${theme.spacing[6]};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    margin-left: auto;
  }
`;

const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  padding: ${theme.spacing[2]};
  border-radius: 50%;
  transition: ${theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
`;

const MobileMenuButton = styled(IconButton)`
  display: none;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
  margin: 0 ${theme.spacing[8]};
  
  input {
    width: 100%;
    padding: ${theme.spacing[2]} ${theme.spacing[12]} ${theme.spacing[2]} ${theme.spacing[10]};
    border: 1px solid ${theme.colors.textTertiary}20;
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.fontSizes.sm};
    background-color: ${theme.colors.background};
    transition: ${theme.transitions.default};
    
    &::placeholder {
      color: ${theme.colors.textTertiary};
    }
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary}40;
      box-shadow: 0 0 0 3px ${theme.colors.primary}10;
    }
  }
  
  svg {
    position: absolute;
    left: ${theme.spacing[4]};
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.textTertiary};
    pointer-events: none;
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  z-index: ${theme.zIndex.overlay};
  transition: ${theme.transitions.default};
`;



const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems] = useState(3); // Mock cart items count
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { 
      label: 'Shop', 
      submenu: [
        { path: '/shop/new-arrivals', label: 'New Arrivals' },
        { path: '/shop/bestsellers', label: 'Bestsellers' },
        { path: '/shop/sale', label: 'Sale' },
      ]
    },
    { 
      label: 'Categories', 
      submenu: [
        { path: '/categories/women', label: 'Women' },
        { path: '/categories/men', label: 'Men' },
        { path: '/categories/kids', label: 'Kids' },
        { path: '/categories/accessories', label: 'Accessories' },
      ]
    },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];
  
  // Handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchTerm = form.search.value.trim();
    if (searchTerm) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <HeaderTopBar>
        <div className="container">
          <div>Free shipping on orders over $50</div>
          <div>
            <Link to="/track-order">Track Order</Link>
            <span style={{ margin: '0 8px' }}>|</span>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </HeaderTopBar>
      
      {/* Main Header */}
      <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <HeaderContent>
            <Logo to="/" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, letterSpacing: '1px' }}>
              FashionHub
            </Logo>
            
            {/* Desktop Navigation */}
            <Nav $isOpen={isMenuOpen}>
              {navItems.map((item) => (
                item.submenu ? (
                  <NavDropdown key={item.label}>
                    <DropdownToggle 
                      $isActive={location.pathname.startsWith(item.path || '')}
                    >
                      {item.label}
                      <FiChevronDown size={16} />
                    </DropdownToggle>
                    <div className="dropdown-menu">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.path} 
                          to={subItem.path}
                          className={location.pathname === subItem.path ? 'active' : ''}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </NavDropdown>
                ) : (
                  <RouterNavLink 
                    key={item.path} 
                    to={item.path}
                    style={({ isActive }) => ({
                      color: isActive ? '#6C63FF' : 'inherit',
                      textDecoration: 'none',
                      padding: '0.5rem 1rem',
                      display: 'block',
                      transition: 'color 0.2s ease'
                    })}
                  >
                    {item.label}
                  </RouterNavLink>
                )
              ))}
            </Nav>
            
            {/* Search Bar */}
            <SearchBar>
              <form onSubmit={handleSearch}>
                <FiSearch />
                <input 
                  type="text" 
                  name="search" 
                  placeholder="Search for products..." 
                  aria-label="Search products"
                />
              </form>
            </SearchBar>
            
            {/* Icons */}
            <Icons>
              <IconButton aria-label="Search">
                <FiSearch />
              </IconButton>
              
              <IconButton aria-label="Account">
                <FiUser />
              </IconButton>
              
              <IconButton aria-label="Cart">
                <FiShoppingBag />
                {cartItems > 0 && <CartCount>{cartItems}</CartCount>}
              </IconButton>
              
              <MobileMenuButton 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </MobileMenuButton>
            </Icons>
          </HeaderContent>
        </div>
        
        {/* Mobile Menu Overlay */}
        <Overlay 
          $isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(false)} 
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
