import { MapPin, Phone, Mail } from 'lucide-react';
import { getSettings } from '../utils/dataStore';
import './Contact.css';

const Contact = () => {
  const settings = getSettings();

  return (
    <div className="contact-page" style={{paddingTop: '120px', minHeight: '80vh'}}>
      <div className="container">
        <div className="text-center" style={{marginBottom: '50px'}}>
          <h1 className="section-title">Contact Us</h1>
          <p className="subtitle" style={{color: 'var(--text-light)'}}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Get in Touch</h3>
            <p style={{marginBottom: '30px', color: 'var(--text-light)'}}>Whether you need a cab for local sightseeing, an outstation trip, or a full holiday package, our team is ready to assist you.</p>
            
            <ul className="contact-list">
              <li>
                <div className="contact-icon-wrapper"><MapPin /></div>
                <div>
                  <strong>Address</strong>
                  <p>{settings.address}</p>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper"><Phone /></div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p>{settings.phone}</p>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper"><Mail /></div>
                <div>
                  <strong>Email</strong>
                  <p>{settings.email}</p>
                </div>
              </li>
            </ul>

            <div style={{marginTop: '40px'}}>
              <h4>Business Hours</h4>
              <p>{settings.businessHours}</p>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Send an Enquiry</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted! (In a real app, this would be saved to Firebase)'); }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="Your Phone Number" required />
              </div>
              <div className="form-group">
                <label>Email (Optional)</label>
                <input type="email" className="form-control" placeholder="Your Email Address" />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select className="form-control" required>
                  <option value="">Select a service</option>
                  <option value="cab">Cab Rental</option>
                  <option value="package">Tour Package</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
