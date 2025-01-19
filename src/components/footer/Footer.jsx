import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 pt-12 border-t border-cyan-500/20">
      <div className="max-w-[1296px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-400 font-orbitron text-sm md:text-base">
          &copy; {new Date().getFullYear()} Futuristic Store. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-cyan-500 hover:text-indigo-500 transition duration-500 ease-in-out font-orbitron"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-cyan-500 hover:text-indigo-500 transition duration-500 ease-in-out font-orbitron"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-cyan-500 hover:text-indigo-500 transition duration-500 ease-in-out font-orbitron"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
