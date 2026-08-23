import './Services.css';
import { Car, Map, Briefcase, Plane, Sunrise, Users } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Car size={40} />,
      title: "Local & Outstation Cab Rental",
      desc: "Reliable sedans and SUVs for local city travel or outstation trips across South India."
    },
    {
      icon: <Plane size={40} />,
      title: "Airport Pickup & Drop",
      desc: "Timely and hassle-free transfers to and from Chennai International Airport."
    },
    {
      icon: <Users size={40} />,
      title: "Tempo Traveller Rental",
      desc: "Comfortable 12 to 24-seater Tempo Travellers and mini-buses for group tours and family trips."
    },
    {
      icon: <Map size={40} />,
      title: "Tour Packages",
      desc: "Curated domestic and international holiday packages, focusing on Tamil Nadu, Kerala, and Thailand."
    },
    {
      icon: <Sunrise size={40} />,
      title: "Pilgrimage Tours",
      desc: "Specialized temple tour packages including Tirupati, Madurai, Rameswaram, and Kanyakumari."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Travel",
      desc: "End-to-end travel solutions for businesses, including employee transportation and event logistics."
    }
  ];

  return (
    <div className="services-page" style={{paddingTop: '120px', minHeight: '80vh'}}>
      <div className="container">
        <div className="text-center" style={{marginBottom: '60px'}}>
          <h1 className="section-title">Our Services</h1>
          <p className="subtitle" style={{color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto'}}>
            From quick airport transfers to comprehensive multi-day tour packages, we offer a wide range of services to meet all your travel needs.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="cta-banner mt-5 text-center">
          <h2>Need a custom travel solution?</h2>
          <p>Contact us with your requirements and we'll craft the perfect plan for you.</p>
          <a href="/contact" className="btn btn-primary" style={{marginTop: '15px'}}>Get a Quote</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
