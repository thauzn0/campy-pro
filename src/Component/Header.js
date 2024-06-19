import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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

  const handleNavigation = (id) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  let headerClasses = ['header'];
  if (scrolled || location.pathname === '/contact') {
    headerClasses.push('scrolled');
  }

  return (
    <header className={headerClasses.join(' ')}>
      <nav className="header-nav">
        <ul className="nav-links">
          <li>
            <span 
              onClick={() => handleNavigation('hero')}
              style={{ cursor: 'pointer' }}
            >
              Home
            </span>
          </li>
          <li>
            <span 
              onClick={() => handleNavigation('products')}
              style={{ cursor: 'pointer' }}
            >
              Products
            </span>
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
