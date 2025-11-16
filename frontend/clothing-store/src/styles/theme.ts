
import { NavLink } from "react-router-dom";
// Define the theme interface
export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    background: string;
    surface: string;
    text: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    white: string;
    black: string;
    overlay: string;
    accent: string;
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  fonts: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fontWeights: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    semibold: number;
    bold: number;
  };
  fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
  };
  shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    none: string;
    small: string;
    medium: string;
    large: string;
    card: string;
    button: string;
    'button-hover': string;
    modal: string;
  };
  borderRadius: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  transitions: {
    default: string;
    fast: string;
    slow: string;
    bounce: string;
    transform: string;
    opacity: string;
    'background-color': string;
    'box-shadow': string;
  };
  spacing: {
    [key: string]: string;
    px: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    mobile: string;
  };
  zIndex: {
    [key: string]: number | string;
    hide: number;
    auto: string;
    base: number;
  };
}

export const theme: Theme = {
  colors: {
    // Modern color palette
    primary: "#5E72E4",
    primaryLight: "#7F8CEA",
    primaryDark: "#3C4EC2",
    secondary: "#2DCE89",
    secondaryLight: "#5BE0A8",
    secondaryDark: "#1AAE6F",
    background: "#F8F9FE",
    surface: "#FFFFFF",
    text: "#32325D",
    textPrimary: "#2D3748",
    textSecondary: "#718096",
    textTertiary: "#A0AEC0",
    success: "#2DCE89",
    warning: "#FB6340",
    error: "#F5365C",
    info: "#11CDEF",
    white: "#FFFFFF",
    black: "#000000",
    overlay: "rgba(50, 50, 93, 0.25)",
    accent: "#F3A4B5",
    // Additional colors
    gray: {
      50: "#F8F9FE",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A"
    }
  },

  fonts: {
    primary: '"Poppins", sans-serif', // Modern, clean font for headings
    secondary: '"Inter", sans-serif', // Highly readable for body text
    accent: '"Playfair Display", serif', // Elegant serif for special elements
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    semibold: 600, // Alias for semiBold for compatibility
    bold: 700,
  },

  fontSizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },

  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    none: 'none',
    small: '0 2px 8px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.08)',
    large: '0 8px 24px rgba(0, 0, 0, 0.1)',
    card: '0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
    button: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'button-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  borderRadius: {
    none: '0',
    xs: '0.125rem', // 2px
    sm: '0.25rem',  // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem',   // 8px
    xl: '0.75rem',  // 12px
    '2xl': '1rem',  // 16px
    '3xl': '1.25rem', // 20px
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
    full: '9999px',
  },

  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.4s ease-in-out',
    bounce: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: 'transform 0.2s ease-in-out',
    opacity: 'opacity 0.2s ease-in-out',
    'background-color': 'background-color 0.2s ease-in-out',
    'box-shadow': 'box-shadow 0.2s ease-in-out',
  },

  spacing: {
    px: '1px',
    0: '0',
    '0.5': '0.125rem', // 2px
    1: '0.25rem', // 4px
    '1.5': '0.375rem', // 6px
    2: '0.5rem', // 8px
    '2.5': '0.625rem', // 10px
    3: '0.75rem', // 12px
    '3.5': '0.875rem', // 14px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
    11: '2.75rem', // 44px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    28: '7rem', // 112px
    32: '8rem', // 128px
    36: '9rem', // 144px
    40: '10rem', // 160px
    44: '11rem', // 176px
    48: '12rem', // 192px
    52: '13rem', // 208px
    56: '14rem', // 224px
    60: '15rem', // 240px
    64: '16rem', // 256px
    72: '18rem', // 288px
    80: '20rem', // 320px
    96: '24rem', // 384px
    xs: '0.5rem', // 8px
    sm: '0.75rem', // 12px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem', // 48px
    '4xl': '4rem', // 64px
    '5xl': '5rem', // 80px
    '6xl': '6rem', // 96px
  },

  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1536px',
    '2xl': '1920px',
    mobile: '768px',
  },

  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
  },
};
