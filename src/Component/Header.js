import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import blackLogo from '../Assets/black_bg_logo-removebg-preview.png'; // Siyah logo yolu
import whiteLogo from '../Assets/white_bg_logo-removebg-preview.png'; // Beyaz logo yolu

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [location]);

  const handleNavigation = (id) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleProductsClick = () => {
    navigate('/products');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  let headerClasses = ['header'];
  let logoSrc = blackLogo;

  if (scrolled || location.pathname !== '/') {
    headerClasses.push('scrolled');
    logoSrc = whiteLogo;
  } else {
    logoSrc = blackLogo;
  }

  return (
    <header className={headerClasses.join(' ')}>
      <nav className="header-nav">
        <div className="logo-container">
          <img src={logoSrc} alt="Logo" className="logo" />
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li>
            <span 
              onClick={() => handleNavigation('hero')}
              style={{ cursor: 'pointer' }}
            >
              Home
            </span>
          </li>
          <li className={`dropdown ${isMobileMenuOpen ? 'mobile-dropdown' : ''}`}>
            <span style={{ cursor: 'pointer' }} onClick={handleProductsClick}>Products</span>
            <div className="dropdown-content">
              <RouterLink to="/campy-pro-v1">Campy Pro AR-1</RouterLink>
              <RouterLink to="/campy-pro-v2">Campy Pro AR-2</RouterLink>
            </div>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
