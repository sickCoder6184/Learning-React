import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">🍽️ Foodie Express</h3>
            <p className="text-gray-300">Delivering happiness to your doorstep.</p>
          </div>
          <div className="text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Foodie Express &mdash; All rights reserved.
            </p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a 
              href="https://github.com/sickCoder6184/Learning-React" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-500">·</span>
            <a 
              href="mailto:support@foodieexpress.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;