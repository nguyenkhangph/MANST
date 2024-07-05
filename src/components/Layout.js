// src/components/Layout.js
import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
    <Footer /> {/* Ensure Footer is included */}
  </div>
);

export default Layout;
