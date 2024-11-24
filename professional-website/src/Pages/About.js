import React from "react";
import Navbar from "../Components/Navbar"; // Adjust the path based on your folder structure
import Footer from "../Components/Footer"; // Adjust the path based on your folder structure
import "../Style/About.css";
import '../Style/App.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-overlay">
          <div className="about-header">
            <h1>About Us</h1>
            <p>Your journey begins here at NS Travels.</p>
          </div>
          <div className="about-content">
            <div className="about-description">
              <h2>Who We Are</h2>
              <p>
                NS Travels is a leading travel agency committed to providing you
                with unforgettable travel experiences. From exotic destinations
                to customized travel plans, we ensure that your journey is
                seamless and filled with memories.
              </p>
            </div>
            <div className="about-mission">
              <h2>Our Mission</h2>
              <p>
                Our mission is to inspire and enable people to explore the
                world, offering exceptional services tailored to every
                traveler's unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
