import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing[12]} 0;
  border-top: 1px solid ${theme.colors.textTertiary}20;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: ${theme.spacing[4]};
    color: ${theme.colors.primary};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: ${theme.spacing[2]};

      a {
        color: ${theme.colors.textSecondary};
        transition: ${theme.transitions.default};

        &:hover {
          color: ${theme.colors.primary};
          padding-left: ${theme.spacing[2]};
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-top: ${theme.spacing[4]};

  a {
    color: ${theme.colors.textSecondary};
    font-size: 1.5rem;
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: ${theme.spacing[8]};
  padding-top: ${theme.spacing[6]};
  border-top: 1px solid ${theme.colors.textTertiary}20;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>FashNova Couture</h3>
          <p>Your destination for premium fashion and accessories.</p>
          <SocialLinks>
            <a href="https://facebook.com" aria-label="Facebook"><FiFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FiYoutube /></a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Shop</h3>
          <ul>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
            <li><Link to="/sale">Sale</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Help</h3>
          <ul>
            <li><Link to="/shipping">Shipping Information</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:info@fashnovacouture.com">
                <FiMail style={{ marginRight: theme.spacing[2] }} />
                info@fashnovacouture.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890">
                <FiPhone style={{ marginRight: theme.spacing[2] }} />
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} FashNova Couture. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;