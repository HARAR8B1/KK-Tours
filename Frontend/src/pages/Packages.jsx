import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { getPackages } from '../utils/dataStore';

const Packages = () => {
  const packages = getPackages();

  return (
    <div className="packages-page" style={{paddingTop: '120px', minHeight: '80vh', backgroundColor: '#f9f9f9'}}>
      <div className="container">
        <div className="text-center" style={{marginBottom: '50px'}}>
          <h1 className="section-title">Our Tour Packages</h1>
          <p className="subtitle" style={{color: 'var(--text-light)', fontSize: '1.1rem'}}>
            Browse through our highly rated domestic and international tour packages. 
          </p>
        </div>

        <div className="packages-grid" style={{marginBottom: '60px'}}>
          {packages.map(pkg => (
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
      </div>
    </div>
  );
};

export default Packages;
