import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-transparent text-white py-8 px-0 mt-auto font-noto">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <p className="text-lg font-light">
            © {new Date().getFullYear()} 
            <span className="font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent mx-2">
              KIBAN
            </span>
            起盤. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Sigmabond01/Kiban"
            className="text-lg font-light hover:text-transparent hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 hover:bg-clip-text transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Sigmabond01"
            className="text-lg font-light hover:text-transparent hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 hover:bg-clip-text transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            X(Twitter)
          </a>
          <a
            href="mailto:smdnoor4966@gmail.com"
            className="text-lg font-light hover:text-transparent hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-100 hover:bg-clip-text transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;