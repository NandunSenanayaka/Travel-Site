import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../Style/Home.css'; // Custom CSS file
import '../Style/App.css';

function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="hero bg-cover text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold" data-aos="fade-up">
            Welcome to NS Travels
          </h1>
          <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
            Your gateway to amazing travel experiences!
          </p>
          <a href="/services" className="btn btn-light btn-lg" data-aos="zoom-in">
            Explore Our Services
          </a>
        </div>
      </header>

      {/* Popular Places Section */}
      <div className="services-container">
        <div className="services-header" data-aos="fade-down">
          <h1>Popular Places</h1>
          <p>Sri Lanka Most Popular Places.</p>
        </div>
        <div className="services-list">
          <div className="service-card" data-aos="flip-left">
            <img
              src={require('../Assert/place 1.jpg')}
              alt="Nine Arch"
              className="service-image"
            />
            <h3>Nine Arch</h3>
            <p>
              Bridge in the Sky, is a viaduct bridge in Sri Lanka and one of the
              best examples of colonial-era railway construction.
            </p>
          </div>
          <div className="service-card" data-aos="flip-right" data-aos-delay="200">
            <img
              src={require('../Assert/place 3.jpg')}
              alt="Sigiriya"
              className="service-image"
            />
            <h3>Sigiriya</h3>
            <p>
              Sigiriya is a ruined ancient city and fortress in Sri Lanka that is
              a UNESCO World Heritage Site.
            </p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <img
              src={require('../Assert/place 4.jpg')}
              alt="Night Mail"
              className="service-image"
            />
            <h3>Night Mail</h3>
            <p>
              Badulla Night Mail Train travels the length of Sri Lanka Railways'
              Main Line through the hill country.
            </p>
          </div>
          <div className="service-card" data-aos="fade-right" data-aos-delay="600">
            <img
              src={require('../Assert/place 2.jpg')}
              alt="Nuwara Eliya"
              className="service-image"
            />
            <h3>Nuwara Eliya</h3>
            <p>
              Nuwara Eliya is a city in the tea country hills of central Sri
              Lanka. The naturally landscaped Hakgala Botanical.
            </p>
          </div>
          <div className="service-card" data-aos="fade-left" data-aos-delay="800">
            <img
              src={require('../Assert/place 5.jpg')}
              alt="Sri Dalada Maligawa"
              className="service-image"
            />
            <h3>Sri Dalada Maligawa</h3>
            <p>
              Sri Dalada Maligawa, commonly known as the Temple of the Sacred
              Tooth Relic, is a Buddhist temple in Kandy, Sri Lanka.
            </p>
          </div>
          <div className="service-card" data-aos="flip-up" data-aos-delay="1000">
            <img
              src={require('../Assert/place 6.jpg')}
              alt="Coconut Tree Hill"
              className="service-image"
            />
            <h3>Coconut Tree Hill</h3>
            <p>
              Much-photographed red-rock promontory with coconut palms, known for
              ocean views & sunset walks.
            </p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="1200">
            <img
              src={require('../Assert/place 7.jpg')}
              alt="Galle Fort"
              className="service-image"
            />
            <h3>Galle Fort</h3>
            <p>Our team is here to assist you at any time during your journey.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="container py-5">
        <h2 className="text-center" data-aos="fade-down">
          Why Choose Us?
        </h2>
        <div className="row">
          <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="100">
            <h3>Exclusive Deals</h3>
            <p>Get the best travel deals and offers only with NS Travels.</p>
          </div>
          <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="300">
            <h3>Global Destinations</h3>
            <p>We cover over 100 countries with fantastic holiday packages.</p>
          </div>
          <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="500">
            <h3>24/7 Support</h3>
            <p>
              Our customer service is available round the clock to help you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
