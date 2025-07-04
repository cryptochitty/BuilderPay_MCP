import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'; // Assuming you have a CSS file for styles

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Builder List', path: '/builder-list' },
    { name: 'Register Builder', path: '/register-builder' },
    { name: 'Login Builder', path: '/login-builder' },
    { name: 'Login Supporter', path: '/login-supporter' },
    { name: 'Donate', path: '/donate' },
  ];

  return (
    <header className="w-full shadow-md sticky top-0 bg-white z-50 font-['Inter_Tight']">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" id='mrheader'>
        <Link to="/" className="text-2xl font-bold text-gray-800" id='logo'>BuilderPay</Link>
        
        <nav className="flex items-center gap-5">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/supporter-register" id='nav-cta'
            className="ml-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Supporter Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
