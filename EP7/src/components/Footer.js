import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>🍽️ Foodie Express</h3>
          <p>Delivering happiness to your doorstep.</p>
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Foodie Express &mdash; All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/sickCoder6184/Learning-React" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span>·</span>
          <a href="mailto:support@foodieexpress.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;