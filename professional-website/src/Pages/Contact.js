import React from "react";
import Navbar from "../Components/Navbar"; // Adjust the path as needed
import Footer from "../Components/Footer"; // Adjust the path as needed
import "../Style/Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-overlay">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We're here to help and answer any questions you may have.</p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
