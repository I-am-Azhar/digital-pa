import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu after clicking any link
  };

  return (
<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50 px-6 py-4 flex justify-between items-center
  bg-light/1 text-light backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">

      
      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/logo1.png"
          alt="DigitalPA Logo"
          className="h-11 w-auto object-contain"
        />
        <div className="text-2xl font-bold text-light">DigitalPa</div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8 text-light font-medium">
        <a href="#grow" className="hover:text-accent transition-all">Home</a>
        <a href="#services" className="hover:text-accent transition-all"> Services</a>
        <a href="#pricing" className="hover:text-accent transition-all">Portfolio</a>
        <a href="#testimonials" className="hover:text-accent transition-all">About Us</a>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:block">
        <button className="px-6 py-2 rounded-full bg-accent text-light font-medium hover:opacity-90 transition-all">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-soft">
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-soft/90 backdrop-blur-lg rounded-b-2xl px-6 py-4 flex flex-col space-y-4 md:hidden">
          <a onClick={handleLinkClick} href="#features" className="text-primary hover:text-accent transition-all">Features</a>
          <a onClick={handleLinkClick} href="#how-it-works" className="text-primary hover:text-accent transition-all">How It Works</a>
          <a onClick={handleLinkClick} href="#pricing" className="text-primary hover:text-accent transition-all">Pricing</a>
          <a onClick={handleLinkClick} href="#testimonials" className="text-primary hover:text-accent transition-all">Testimonials</a>
          <button
            onClick={handleLinkClick}
            className="mt-2 px-6 py-2 rounded-full bg-accent text-light font-medium hover:opacity-90 transition-all"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
