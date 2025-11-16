import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';
import 'modern-css-reset';

export const GlobalStyles = createGlobalStyle`
  /* Google Fonts Import */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  
  /* Modern CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  /* Base HTML & Body Styles */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray[100]};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray[400]};
    border-radius: ${theme.borderRadius.full};
    
    &:hover {
      background: ${theme.colors.gray[500]};
    }
  }

  /* Base Styles */
  body {
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
    transition: ${theme.transitions.default};
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.semibold};
    line-height: 1.2;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing[4]};
    letter-spacing: -0.02em;
  }
  
  h1 { 
    font-size: ${theme.fontSizes['5xl']};
    font-weight: ${theme.fontWeights.bold};
    line-height: 1.1;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['4xl']};
    }
  }
  
  h2 {
    font-size: ${theme.fontSizes['4xl']};
    font-weight: ${theme.fontWeights.semibold};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }
  
  h3 {
    font-size: ${theme.fontSizes['3xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['2xl']};
    }
  }
  
  p {
    margin-bottom: ${theme.spacing[4]};
    color: ${theme.colors.text};
    line-height: 1.7;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.primaryDark};
      text-decoration: underline;
    }
  }
  
  /* Buttons */
  button, .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing[2]} ${theme.spacing[6]};
    border-radius: ${theme.borderRadius.md};
    font-family: ${theme.fonts.secondary};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.base};
    line-height: 1.5;
    cursor: pointer;
    transition: ${theme.transitions.default};
    border: 1px solid transparent;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    &-primary {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      
      &:hover:not(:disabled) {
        background-color: ${theme.colors.primaryDark};
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.button};
      }
      
      &:active:not(:disabled) {
        transform: translateY(0);
      }
    }
    
    &-outline {
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      
      &:hover:not(:disabled) {
        background-color: rgba(94, 114, 228, 0.1);
        transform: translateY(-1px);
      }
    }
  }
  
  /* Forms */
  input, textarea, select {
    width: 100%;
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    border: 1px solid ${theme.colors.gray[300]};
    border-radius: ${theme.borderRadius.md};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.base};
    transition: ${theme.transitions.default};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    }
    
    &::placeholder {
      color: ${theme.colors.gray[400]};
    }
  }
  
  /* Cards */
  .card {
    background: ${theme.colors.surface};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.sm};
    padding: ${theme.spacing[6]};
    transition: ${theme.transitions.default};
    
    &:hover {
      box-shadow: ${theme.shadows.md};
      transform: translateY(-2px);
    }
  }
  
  /* Layout Utilities */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[4]};
    
    @media (min-width: ${theme.breakpoints.lg}) {
      padding: 0 ${theme.spacing[8]};
    }
  }
  
  .section {
    padding: ${theme.spacing[20]} 0;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing[12]} 0;
    }
  }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.semiBold};
    line-height: 1.2;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing[4]};
    letter-spacing: -0.02em;
  }

  h1 { 
    font-size: ${theme.fontSizes['5xl']};
    font-weight: ${theme.fontWeights.bold};
    line-height: 1.1;
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['4xl']};
    }
  }

  h2 { 
    font-size: ${theme.fontSizes['4xl']};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }

  h3 { 
    font-size: ${theme.fontSizes['3xl']};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['2xl']};
    }
  }

  h4 { 
    font-size: ${theme.fontSizes['2xl']};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.xl};
    }
  }

  h5 { 
    font-size: ${theme.fontSizes.xl};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.lg};
    }
  }

  h6 { 
    font-size: ${theme.fontSizes.lg};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.base};
    }
  }

  p {
    margin-bottom: ${theme.spacing[4]};
    color: ${theme.colors.textSecondary};
    line-height: 1.7;
    font-weight: ${theme.fontWeights.regular};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Links */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    cursor: pointer;
    font-weight: ${theme.fontWeights.medium};
    position: relative;
    
    &:hover {
      color: ${theme.colors.primaryDark};
    }
    
    &.underline {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: currentColor;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform ${theme.transitions.default};
      }
      
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  /* Form Elements */
  button, input, textarea, select {
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.base};
    outline: none;
    transition: ${theme.transitions.default};
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    
    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, textarea, select {
    width: 100%;
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    border: 1px solid ${theme.colors.textTertiary};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.surface};
    color: ${theme.colors.textPrimary};
    font-size: ${theme.fontSizes.base};
    
    &::placeholder {
      color: ${theme.colors.textTertiary};
    }
    
    &:focus {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primaryLight}40;
    }
    
    &:disabled {
      background-color: ${theme.colors.textTertiary}20;
      cursor: not-allowed;
    }
  }

  /* Lists */
  ul, ol {
    list-style: none;
    margin-bottom: ${theme.spacing[4]};
    padding-left: ${theme.spacing[6]};
    
    li {
      margin-bottom: ${theme.spacing[2]};
      position: relative;
      
      &::before {
        content: '•';
        position: absolute;
        left: -${theme.spacing[4]};
        color: ${theme.colors.primary};
      }
    }
  }

  ol {
    counter-reset: item;
    
    li {
      counter-increment: item;
      
      &::before {
        content: counter(item) '.';
        font-weight: ${theme.fontWeights.bold};
      }
    }
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    transition: ${theme.transitions.default};
  }

  /* Layout Utilities */
  .container {
    width: 100%;
    max-width: ${theme.breakpoints.xl};
    margin: 0 auto;
    padding: 0 ${theme.spacing[6]};
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing[4]};
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacing[3]};
    }
  }

  .section {
    padding: ${theme.spacing[20]} 0;
    position: relative;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      padding: ${theme.spacing[16]} 0;
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing[12]} 0;
    }
    
    &--no-padding {
      padding: 0;
    }
    
    &--small {
      padding: ${theme.spacing[12]} 0;
      
      @media (max-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing[8]} 0;
      }
    }
  }

  /* Text Utilities */
  .text {
    &-center { text-align: center; }
    &-left { text-align: left; }
    &-right { text-align: right; }
    &-justify { text-align: justify; }
    
    &-primary { color: ${theme.colors.primary}; }
    &-secondary { color: ${theme.colors.secondary}; }
    &-accent { color: ${theme.colors.accent}; }
    
    &-light { font-weight: ${theme.fontWeights.light}; }
    &-regular { font-weight: ${theme.fontWeights.regular}; }
    &-medium { font-weight: ${theme.fontWeights.medium}; }
    &-semiBold { font-weight: ${theme.fontWeights.semiBold}; }
    &-bold { font-weight: ${theme.fontWeights.bold}; }
    
    &-uppercase { text-transform: uppercase; }
    &-lowercase { text-transform: lowercase; }
    &-capitalize { text-transform: capitalize; }
    
    &-xs { font-size: ${theme.fontSizes.xs}; }
    &-sm { font-size: ${theme.fontSizes.sm}; }
    &-base { font-size: ${theme.fontSizes.base}; }
    &-lg { font-size: ${theme.fontSizes.lg}; }
    &-xl { font-size: ${theme.fontSizes.xl}; }
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing[3]} ${theme.spacing[8]};
    border-radius: ${theme.borderRadius.full};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.base};
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid transparent;
    transition: ${theme.transitions.default};
    position: relative;
    overflow: hidden;
    min-width: 160px;
    height: 52px;
    
    &--primary {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      
      &:hover {
        background-color: ${theme.colors.primaryDark};
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.md};
      }
      
      &:active {
        transform: translateY(0);
      }
    }
    
    &--outline {
      background-color: transparent;
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.primary}10;
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.sm};
      }
    }
    
    &--text {
      background: none;
      color: ${theme.colors.primary};
      padding: ${theme.spacing[2]} ${theme.spacing[3]};
      min-width: auto;
      height: auto;
      
      &:hover {
        background-color: ${theme.colors.primary}10;
      }
    }
    
    &--small {
      padding: ${theme.spacing[2]} ${theme.spacing[6]};
      height: 40px;
      min-width: 120px;
      font-size: ${theme.fontSizes.sm};
    }
    
    &--large {
      padding: ${theme.spacing[4]} ${theme.spacing[10]};
      height: 60px;
      min-width: 200px;
      font-size: ${theme.fontSizes.lg};
    }
    
    &--full-width {
      width: 100%;
    }
    
    &--icon-left,
    &--icon-right {
      gap: ${theme.spacing[2]};
    }
    
    &--icon-left {
      flex-direction: row-reverse;
    }
    
    &--loading {
      color: transparent !important;
      pointer-events: none;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        margin: -10px 0 0 -10px;
        border: 2px solid ${theme.colors.white};
        border-radius: 50%;
        border-right-color: transparent;
        animation: button-loading 0.75s linear infinite;
      }
    }
    
    @keyframes button-loading {
      to { transform: rotate(360deg); }
    }
  }
    white-space: nowrap;

    &-primary {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.text};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.medium};
      }
    }

    &-secondary {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.text};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.medium};
      }
    }
  }

  // Utility classes
  .mt-1 { margin-top: ${theme.spacing.xs}; }
  .mt-2 { margin-top: ${theme.spacing.sm}; }
  .mt-3 { margin-top: ${theme.spacing.md}; }
  .mt-4 { margin-top: ${theme.spacing.lg}; }
  .mt-5 { margin-top: ${theme.spacing.xl}; }
  .mb-1 { margin-bottom: ${theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${theme.spacing.md}; }
  .mb-4 { margin-bottom: ${theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${theme.spacing.xl}; }
`;
