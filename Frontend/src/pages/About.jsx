import './About.css';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page" style={{paddingTop: '100px', minHeight: '80vh'}}>
      <div className="container">
        <div className="about-header text-center">
          <h1 className="section-title">About KK Tours & Travels</h1>
          <p className="subtitle">Your Trusted Travel Partner in Chennai</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for travel and a commitment to exceptional service, KK Tours and Travels has grown to become one of Chennai's premier travel agencies. We specialize in providing top-notch transportation and customized tour packages for individuals, families, and corporate clients.
            </p>
            <p>
              Located in Padi, Chennai, we pride ourselves on our deep understanding of South Indian tourism and our ability to craft memorable experiences across India and international destinations like Thailand.
            </p>
            
            <h3 style={{marginTop: '30px', marginBottom: '15px'}}>Why Choose Us?</h3>
            <ul className="features-list">
              <li><CheckCircle className="check-icon" /> Over a decade of experience in the travel industry</li>
              <li><CheckCircle className="check-icon" /> Well-maintained, comfortable fleet of vehicles</li>
              <li><CheckCircle className="check-icon" /> Professional, verified, and courteous drivers</li>
              <li><CheckCircle className="check-icon" /> Transparent pricing with no hidden charges</li>
              <li><CheckCircle className="check-icon" /> 24/7 customer support during your trip</li>
            </ul>
          </div>
          
          <div className="about-images">
            <div className="image-stack">
              <img src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop" alt="Travel" className="img-front" />
              <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop" alt="Transportation" className="img-back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
