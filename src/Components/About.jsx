import React from 'react';
import viber_image from '../assets/viber_image.jpg';

const About = () => {
  return (
    <div id="about" className="bg-[#FAFAF4] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-col md:flex-row bg-white p-10 md:p-16 rounded-lg shadow-lg">
          <div className="mr-0 md:mr-8 border-4 border-gray-300">
            <img
              src={viber_image}
              alt="viber_image"
              className="w-full h-full"
            />
          </div>
          <div className="text-left">
            <h1 className="text-4xl text-yellow-700 mb-4">About Me</h1>
            <p className="text-xl text-yellow-600 mb-6">
              Hi, I'm Bibha Khadka! I'm a passionate front-end developer who loves turning ideas into interactive, user-friendly websites.
            </p>

            <h2 className="text-2xl text-yellow-700 mb-4">Who Am I?</h2>
            <p className="text-yellow-600 text-lg leading-relaxed">
              I'm a developer with a passion for creating beautiful and functional websites. I have a deep interest in front-end development. In my free time, I enjoy exploring new web technologies and contributing to open-source projects.
            </p>

            <div className="text-left">
              <h2 className="text-2xl text-yellow-700 mb-4">Hobbies</h2>
              <p className="text-yellow-600 text-lg">
                In my free time, I enjoy reading about new technologies, playing games, and exploring nature. I also love photography and often try to capture the beauty of the world around me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
