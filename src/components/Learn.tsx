import React from 'react';
import { FaHouseChimney } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
import { RiFirstAidKitFill } from "react-icons/ri";

const Learn = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h5 className="text-gray-500">Learn More</h5>
      <h1 className="text-2xl lg:w-[60%] md:text-3xl lg:text-5xl w-full mt-4 font-bold text-start text-gray-800 mb-10 leading-snug">
        We&apos;ve helped over 200 vulnerable communities
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* House & Shelter Section */}
        <div className="flex items-center border rounded-md bg-gray-300 hover:bg-[#9ecff4] flex-col px-2 py-20 space-y-4 border-gray-200 shadow-xl">
          <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
            <FaHouseChimney className="text-2xl text-blue-500" />
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg sm:text-[22px] font-bold text-black mt-4">House & Shelter</h2>
            <p className="text-black text-sm w-full mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, esse!
            </p>
            <button className="mt-12 px-6 py-2 text-black hover:text-white rounded-lg bg-blue-500">
              Donate Now
            </button>
          </div>
        </div>

        {/* Care & Support Section */}
        <div className="flex items-center bg-gray-300 hover:bg-[#9ecff4] flex-col px-2 py-20 space-y-4 border border-gray-200 shadow-xl rounded-md">
          <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
            <FaRegHeart className="text-2xl text-blue-600" />
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg sm:text-[22px] font-bold mt-4 text-black">Care & Support</h2>
            <p className="text-black text-sm w-full mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio!
            </p>
            <button className="mt-12 px-6 py-2 text-black hover:text-white rounded-lg bg-blue-500">
              Donate Now
            </button>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex items-center bg-gray-300 hover:bg-[#9ecff4] flex-col px-2 py-20 space-y-4 border border-gray-200 shadow-xl">
          <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
            <MdStars className="text-2xl text-blue-600" />
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg sm:text-[22px] font-bold text-black mt-4">Education</h2>
            <p className="text-black text-sm w-full mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, asperiores?
            </p>
            <button className="mt-12 px-6 py-2 text-black hover:text-white rounded-lg bg-blue-500">
              Donate Now
            </button>
          </div>
        </div>

        {/* Environmental Help Section */}
        <div className="flex items-center bg-gray-300 hover:bg-[#9ecff4] flex-col px-2 py-20 space-y-4 border border-gray-200 shadow-xl">
          <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
            <PiPottedPlantFill className="text-2xl text-blue-600" />
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg sm:text-[22px] font-bold text-black mt-4">Environmental Help</h2>
            <p className="text-black text-sm w-full mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsam.
            </p>
            <button className="mt-12 px-6 py-2 text-black hover:text-white rounded-lg bg-blue-500">
              Donate Now
            </button>
          </div>
        </div>

        {/* Food Relief Section */}
        <div className="flex items-center bg-gray-300 hover:bg-[#9ecff4] flex-col px-2 py-20 space-y-4 border border-gray-200 shadow-lg">
          <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
            <PiBowlFoodFill className="text-2xl text-blue-600" />
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg sm:text-[22px] font-bold text-black mt-4">Food Relief Funding</h2>
            <p className="text-black text-sm w-full mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quo.
            </p>
            <button className="mt-12 px-6 py-2 text-black hover:text-white rounded-lg bg-blue-500">
              Donate Now
            </button>
          </div>
        </div>

        {/* Health & Dental Care Section */}
        <div className="flex items-center bg-gray-300 hover:bg-[#9ecff4] flex-col px-2 py-20 space-y-4 border border-gray-200 shadow-lg">
          <div className="relative w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
            <RiFirstAidKitFill className="text-2xl text-blue-600" />
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg sm:text-[22px] font-bold text-black mt-4">Health & Dental Care</h2>
            <p className="text-black text-sm w-full mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, voluptatem.
            </p>
            <button className="mt-12 px-6 py-2 text-black hover:text-white rounded-lg bg-blue-500">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
