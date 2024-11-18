import React from 'react';
import aboutImg from '@/components/assets/61f3f1b51ed4c8707f81cd9b_pexels-neemias (1).png';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 font-Titillium">
      {/* Page Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl w-[70%] font-bold text-start text-gray-800 mb-10 leading-snug">
        Welfare has provided aid across 27 countries through 400+ welfare projects.
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-start">
          <Image
            src={aboutImg}
            alt="About Us"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-600 uppercase mb-4 tracking-wider">
            About Us
          </h4>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded by Sid and Zarina Khattar, Welfare operates with the single-minded focus of
            empowering human lives everywhere. Our vision is to get help where it&apos;s needed, to
            mobilize support, and rebuild humanity from the ground up.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
