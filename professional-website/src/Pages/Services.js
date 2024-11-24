import React from "react";
import Navbar from "../Components/Navbar"; // Adjust the path as needed
import Footer from "../Components/Footer"; // Adjust the path as needed
import "../Style/Services.css";


const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>We offer a wide range of services to make your travels unforgettable.</p>
        </div>
        <div className="services-list">
          <div className="service-card">
          <img src={require('../Assert/service01.jpg')} alt="Service 1" className="service-image" />

            <h3>Custom Tour Packages</h3>
            <p>Plan your perfect getaway with our tailored tour packages.</p>
          </div>
          <div className="service-card">
          <img src={require('../Assert/service2.jpg')} alt="Service 1" className="service-image" />
            <h3>Luxury Accommodation</h3>
            <p>Experience luxury stays at the best hotels and resorts.</p>
          </div>
          <div className="service-card">
          <img src={require('../Assert/service3.jpg')} alt="Service 1" className="service-image" />
            <h3>24/7 Support</h3>
            <p>Our team is here to assist you at any time during your journey.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
