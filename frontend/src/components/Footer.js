import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Company Name</h2>
            <p className="text-gray-400 mt-2">
              Providing high-quality products since Van Toeka.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                <li><Link to="/seller" className="hover:text-gray-300">Become a Seller</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Support</h3>
              <ul className="mt-2 space-y-2">
                <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
                <li><Link to="/support" className="hover:text-gray-300">Support</Link></li>
                <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; 2024 Tribe Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;