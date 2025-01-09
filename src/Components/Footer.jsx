import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#f5f5e9] py-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

  
        <div className="flex flex-col items-center md:items-start space-y-4 text-yellow-700">
          <p className="text-lg font-semibold">Copyright &copy; 2025 Bibha Khadka</p>
          <p className="text-sm opacity-75">All rights reserved</p>
        </div>

  
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/in/bibha-khadka-4b4844300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 hover:text-yellow-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/bibha_khadka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 hover:text-yellow-600 transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/bibha.kdk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 hover:text-yellow-600 transition duration-300"
          >
            Facebook
          </a>
        </div>

        {/* Footer Right Section */}
        <div className="mt-6 md:mt-0">
          <p className="text-sm opacity-75 text-yellow-700">
            Designed and Developed by <span className="font-semibold">Bibha Khadka</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
