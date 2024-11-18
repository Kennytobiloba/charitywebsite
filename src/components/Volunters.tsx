import React from 'react';
import Image from 'next/image';
import img from "@/components/assets/volunter.png";

const Volunters = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 max-w-6xl mx-auto gap-8 mt-16">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <Image 
          src={img} 
          alt="Volunteer"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Become a Volunteer
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Join us in making a difference! We need passionate individuals like you to help us support our community and improve lives.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Volunteering with our charity allows you to give back, learn new skills, and meet amazing people. Whether you&apos;re helping with events, supporting our programs, or offering your expertise, every bit helps.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Volunters;
