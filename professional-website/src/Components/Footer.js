import React from "react";
import "../Style/Footer.css"; // Optional for additional styling

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container text-center py-4">
    <p>&copy; 2024 NS Travels. Made By Nadun Senanayaka.</p>
    <p>Follow us on:</p>
    <div>
      <a href="https://facebook.com" className="mx-2">Facebook</a>
      <a href="https://twitter.com" className="mx-2">Twitter</a>
      <a href="https://instagram.com" className="mx-2">Instagram</a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
