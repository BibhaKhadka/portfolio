import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

const Contact = () => {
  return (
    <div id="contact" className="list-none bg-[#FAFAF4] py-10">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl mx-auto md:p-20 relative pb-0">
        <h1 className="text-center font-bold mb-6 text-yellow-700">Contact</h1>
        <p className="ml-28 mb-4 text-yellow-700 font-semibold">
          We can accomplish great things together. Let's connect.
        </p>
        <a href="mailto:khadkabibha@gmail.com" className="flex items-center ml-32 mb-4">
          <CiMail size={25} className="mr-2" />
          <li className="text-yellow-600">Send a note to my inbox</li>
        </a>
        <a href="https://www.linkedin.com/in/bibha-khadka" className="flex items-center ml-32 mb-4">
          <FaLinkedin size={25} className="mr-2 text-blue-900" />
          <li className="text-yellow-600">Find me professionally here</li>
        </a>
        <a href="https://www.instagram.com/bibha_khadka" className="flex items-center ml-32 mb-4">
          <FaInstagram size={25} className="mr-2 text-pink-700" />
          <li className="text-yellow-600">Follow me for more inspiration</li>
        </a>
        <a href="https://www.facebook.com/bibha.kdk" className="flex items-center ml-32 mb-4">
          <FaFacebook size={25} className="mr-2 text-blue-800" />
          <li className="text-yellow-600">Reach out on my Facebook page</li>
        </a>
        <a href='tel:+9779847369939' className="absolute top-[50%] right-80 animate-bounce duration-1000">
  <LuPhoneCall size={40} className="text-green-600" />
</a>


      </div>
    </div>
  );
};

export default Contact;
