import React, { useState, useEffect } from 'react';
import viber_image from '../assets/viber.png';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = ['Front-end Developer.'];

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearInterval(typingInterval);
    } else {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCharIndex(0);
        setTypedText('');
      }, 1000);
    }
  }, [charIndex, index, texts]);

  return (
    <div id="home" className="bg-[#FAFAF4] min-h-screen pt-[80px] flex items-center justify-center">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl p-10 md:p-20 bg-white rounded-lg shadow-lg space-y-10 md:space-y-0 md:space-x-20 mb-14">
    
    <div className="text-center md:text-left flex-1 space-y-5">
      <h1 className="text-3xl font-serif text-yellow-700 whitespace-nowrap">
        Hi, I'm Bibha Khadka!
      </h1>

      <p className="text-xl text-yellow-700">
        <span className="typing-animation">
          {typedText}
        </span>
      </p>

      <p className="text-lg text-yellow-700 opacity-80">
        I create intuitive, user-friendly websites that are as functional as they are beautiful.
      </p>

      <a href="/assets/Bibha-cv.pdf" download="Bibha-cv.pdf" className="inline-block px-6 py-3 bg-yellow-700 text-white rounded-lg text-lg shadow-md hover:bg-yellow-800 hover:shadow-xl transition duration-300 ease-in-out">
        Download CV
      </a>
    </div>

    <div className="flex-1 flex justify-center">
      <img 
        src={viber_image} 
        alt="Bibha Khadka" 
        className="w-60 h-60 rounded-full shadow-lg object-cover transition duration-300 transform hover:scale-105 " 
      />
    </div>
  </div>
</div>

  );
};

export default Home;
