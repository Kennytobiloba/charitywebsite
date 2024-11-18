import React from "react";
import imgone from "@/components/assets/61f5039abbd0e155be04bc07_pexels-neemias-seara (1) (1) (1) (1).png";
import imgtwo from "@/components/assets/need.png";
import imgthree from "@/components/assets/62079be4f422ea91fa2964a3_pexels-neemias (1).png";
import Image from "next/image";

const Help = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-Titillium w-[90%] mx-auto relative bottom-20">
      {/* Content Block */}
      <div className="flex flex-col items-start bg-white p-4 shadow-lg rounded-lg">
        <Image
          src={imgone}
          width={400}
          height={500}
          alt="Cyclone Yaas Relief"
          className="rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-[28px] font-bold px-1">Cyclone Yaas Relief</h3>
          <p className="text-gray-700 mt-2 px-1">
            People of Sundarbans need your help to rebuild their homes.
          </p>
          <div className="h-4 border border-gray-300 bg-gray-100 w-full rounded-md mt-3">
            {/* Blue filled section */}
            <div className="h-full bg-[#afd1ee] w-[70%] rounded-md"></div>
          </div>
          <div className="flex justify-between text-gray-700 text-sm mt-2">
            <h4>$7000</h4>
            <h4>70%</h4>
          </div>
          <h4 className="text-gray-600 text-sm mt-1">RAISED OF $8000</h4>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </div>

      {/* Second Block */}
      <div className="flex flex-col items-start bg-white p-4 shadow-lg rounded-lg">
        <Image
          src={imgthree}
          width={400}
          height={500}
          alt="Cyclone Yaas Relief"
          className="rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-[28px] font-bold px-1">COVID-19 Crisis Help</h3>
          <p className="text-gray-700 mt-2 px-1">
          Help sex workers in India battle the COVID-19 pandemic.
          </p>
          <div className="h-4 border border-gray-300 bg-gray-100 w-full rounded-md mt-3">
            <div className="h-full bg-[#afd1ee] w-[50%] rounded-md"></div>
          </div>
          <div className="flex justify-between text-gray-700 text-sm mt-2">
            <h4>$4000</h4>
            <h4>50%</h4>
          </div>
          <h4 className="text-gray-600 text-sm mt-1">RAISED OF $8000</h4>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </div>

      {/* Third Block */}
      <div className="flex flex-col items-start bg-white p-4 shadow-lg rounded-lg">
        <Image
          src={imgtwo}
          width={400}
          height={500}
          alt="Cyclone Yaas Relief"
          className="rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-[28px] font-bold px-1">Child Hunger Relief Fund
        </h3>
          <p className="text-gray-700 mt-2 px-1">
          Help children from the tribal commun
          </p>
          <div className="h-4 border border-gray-300 bg-gray-100 w-full rounded-md mt-3">
            <div className="h-full bg-[#afd1ee] w-[30%] rounded-md"></div>
          </div>
          <div className="flex justify-between text-gray-700 text-sm mt-2">
            <h4>$2400</h4>
            <h4>30%</h4>
          </div>
          <h4 className="text-gray-600 text-sm mt-6">RAISED OF $8000</h4>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
