import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSSfiles/BlogNavbar.css';

const BlogNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="blog-navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu} className="brand-link">
            <span className="brand-icon">📝</span>
            <span className="brand-text">My Blog</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/profle" 
            
              className={`nav-link ${isActive('/blog')}`}
              onClick={closeMenu}
            >
              👨🏿‍🏫 profile
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/blogs" 
            
              className={`nav-link ${isActive('/categories')}`}
              onClick={closeMenu}
            >
              📂 All post
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about')}`}
              onClick={closeMenu}
            >
              👋 About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              📧 Contact
            </Link>
          </li>
        </ul>

        {/* Search/Additional Items */}
        <div className="nav-actions">
          <button className="search-btn" aria-label="Search">
            🔍
          </button>
          
          {/* Mobile Menu Icon */}
          <div 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;