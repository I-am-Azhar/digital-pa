import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Digital<span className="text-blue-500">PA</span></h3>
            <p className="text-gray-400">
              Your trusted partner for digital transformation and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="grow" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Home</a></li>
              <li><a href="services" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Services</a></li>
              <li><a href="portfolio" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:translate-x-1 cursor-target">Branding</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Email: info@digitalpa.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-target">
                  <img src="/bg/icons8-facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-target">
                  <img src="/bg/icons8-instagram-logo.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110 cursor-target">
                  <img src="/bg/icons8-youtube.svg" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Digital<span className="text-blue-500">PA</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;