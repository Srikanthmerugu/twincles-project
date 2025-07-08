// src/components/Layout.jsx
import React from 'react';
import WhatsAppFloatingButton from '../pages/WhatsAppFloatingButton';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <WhatsAppFloatingButton />
    </>
  );
};

export default Layout;