import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Polling App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Polling App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;