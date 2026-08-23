import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { getSettings } from '../utils/dataStore';
import './Header.css';

const Header = () => {
  const settings = getSettings();

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <span className="contact-item"><Phone size={16} /> {settings.phone}</span>
            <span className="contact-item"><Mail size={16} /> {settings.email}</span>
          </div>
          <div className="business-hours" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>{settings.businessHours}</span>
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container header-content">
          <Link to="/" className="logo-container">
            <img src="/Logo.bmp" alt="KK Tours & Travels Logo" className="logo-image" />
          </Link>
          
          <nav className="nav-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-cta">
            <a href={`https://wa.me/${settings.whatsapp}`} className="btn btn-primary" target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
