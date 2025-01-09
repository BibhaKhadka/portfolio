import React from 'react';
import viber_image from '../assets/viber.png';

const Home = () => {
  return (
    <div id='home' className="bg-[#FAFAF4] h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl p-10 md:p-20 bg-white rounded-lg shadow-lg space-y-10 md:space-y-0 md:space-x-20 mb-14">
        <div className="text-center md:text-left flex-1 space-y-5">
          <h1 className="text-4xl text-yellow-700 font-serif">Hi, I'm Bibha Khadka!</h1>
          <p className="text-xl text-yellow-700">Front-end Developer</p>
          <p className="text-lg text-yellow-700 opacity-80">
            I create intuitive, user-friendly websites that are as functional as they are beautiful.
          </p>
          <a
            href="/assets/Bibha-cv.pdf"
            download="Bibha-cv.pdf"
            className="inline-block px-6 py-3 bg-yellow-700 text-white rounded-lg text-lg shadow-md hover:bg-yellow-800 transition duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={viber_image}
            alt="Bibha Khadka"
            className="w-60 h-60 rounded-full shadow-lg object-cover border-4 transition duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
