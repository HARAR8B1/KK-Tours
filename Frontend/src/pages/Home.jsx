import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { getPackages } from '../utils/dataStore';
import './Home.css';

const Home = () => {
  const packages = getPackages();
  const featuredPackages = packages.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Discover the World with<br />KK Tours & Travels</h1>
          <p className="hero-subtitle">Your premier travel partner in Chennai for outstation cabs, tour packages, and unforgettable holidays.</p>
          <div className="hero-cta">
            <a href="https://wa.me/919876543210" className="btn btn-primary btn-large">WhatsApp Us Now</a>
            <Link to="/packages" className="btn btn-secondary btn-large">Explore Packages</Link>
          </div>
        </div>
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="highlights section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🚗</div>
              <h3>Premium Cabs</h3>
              <p>Well-maintained fleet of cars and tempo travellers for all group sizes.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">✈️</div>
              <h3>Custom Packages</h3>
              <p>Tailored domestic and international holiday packages just for you.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>24/7 Support</h3>
              <p>Dedicated customer service to assist you before, during, and after your trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="featured-packages section">
        <div className="container">
          <h2 className="section-title">Popular Tour Packages</h2>
          <div className="packages-grid">
            {featuredPackages.map(pkg => (
              <div className="package-card" key={pkg.id}>
                <div className="package-img" style={{backgroundImage: `url(${pkg.img})`}}></div>
                <div className="package-content">
                  <div className="package-meta">
                    <span><Clock size={16} /> {pkg.duration}</span>
                    <span><MapPin size={16} /> {pkg.location}</span>
                  </div>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>
                  <div className="package-footer">
                    <span className="package-price">From {pkg.price}</span>
                    <Link to="/contact" className="btn btn-primary btn-sm">Enquire Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop: '40px', textAlign: 'center'}}>
            <Link to="/packages" className="btn btn-secondary">View All Packages <ArrowRight size={18} style={{marginLeft: '8px'}}/></Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="services-summary section">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2>Our Core Services</h2>
              <p>We provide a comprehensive range of travel services to ensure your journey is comfortable, safe, and memorable.</p>
              <ul className="services-list">
                <li><ArrowRight className="list-icon" /> Local & Outstation Cab Rental</li>
                <li><ArrowRight className="list-icon" /> Airport Pickup & Drop</li>
                <li><ArrowRight className="list-icon" /> Tempo Traveller / Mini-Bus Rental</li>
                <li><ArrowRight className="list-icon" /> Corporate Travel Bookings</li>
              </ul>
              <Link to="/services" className="btn btn-primary" style={{marginTop: '20px'}}>Explore All Services</Link>
            </div>
            <div className="services-image">
              <img src="https://source.unsplash.com/600x400/?taxi,road" alt="Cab Rental Services" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
              </div>
              <p className="testimonial-text">"Excellent service! We booked a tempo traveller for a family trip to Ooty. The vehicle was clean, and the driver was very professional and polite."</p>
              <p className="testimonial-author">- Ramesh Kumar</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
                <Star className="star-icon" fill="currentColor" />
              </div>
              <p className="testimonial-text">"KK Tours arranged our Thailand trip flawlessly. From flights to hotels and local sightseeing, everything was perfect. Highly recommended!"</p>
              <p className="testimonial-author">- Priya S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bottom-cta section">
        <div className="container text-center">
          <h2>Ready to Start Your Journey?</h2>
          <p>Contact us today for the best quotes on cabs and tour packages.</p>
          <a href="tel:+919876543210" className="btn btn-primary btn-large" style={{marginRight: '15px'}}>Call Us Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
