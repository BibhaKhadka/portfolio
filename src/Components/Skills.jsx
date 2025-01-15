import React from 'react';
import reactlogo from '../assets/reactjslogo.svg';
import tailwindlogo from '../assets/tailwindlogo.svg';
import nodejslogo from '../assets/reactjslogo.svg';
import htmllogo from '../assets/htmllogo.svg';
import csslogo from '../assets/csslogo.svg';
import jslogo from '../assets/jslogo.svg';

const Skills = () => {
  return (
    <div id="skills" className="bg-[#FAFAF4] py-20">
      <div className="max-w-6xl mx-auto md:p-20 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl text-yellow-700 mb-8 font-semibold">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            <img src={reactlogo} alt="React Logo" className="h-20 mx-auto" />
            <img src={tailwindlogo} alt="Tailwind Logo" className="h-20 mx-auto" />
            <img src={nodejslogo} alt="Node.js Logo" className="h-20 mx-auto" />
            <img src={htmllogo} alt="HTML Logo" className="h-20 mx-auto" />
            <img src={csslogo} alt="CSS Logo" className="h-20 mx-auto" />
            <img src={jslogo} alt="JavaScript Logo" className="h-20 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
