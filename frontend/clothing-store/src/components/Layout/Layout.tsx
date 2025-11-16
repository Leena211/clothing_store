import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Adjust based on header height
  background-color: ${theme.colors.background};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <Header />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
