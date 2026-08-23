import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { getSettings } from '../../utils/dataStore';
import './Footer.css';

const Footer = () => {
  const settings = getSettings();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <h3 className="footer-title">KK Tours & Travels</h3>
          <p className="footer-desc">
            Your trusted travel partner in Chennai. We offer the best tour packages, cab rentals, and customized holiday experiences across South India and beyond.
          </p>
          <div className="social-links">
            {settings.facebook && (
              <a href={settings.facebook} target="_blank" rel="noreferrer" className="social-icon">FB</a>
            )}
            {settings.instagram && (
              <a href={settings.instagram} target="_blank" rel="noreferrer" className="social-icon">IG</a>
            )}
            {settings.youtube && (
              <a href={settings.youtube} target="_blank" rel="noreferrer" className="social-icon">YT</a>
            )}
          </div>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/packages">Tour Packages</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin" className="admin-link">Admin Portal</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>{settings.address}</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>{settings.phone}</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>{settings.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} KK Tours and Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
