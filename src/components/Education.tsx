import React from "react";
import imgone from "@/components/assets/61f3f1b51ed4c8707f81cd9b_pexels-neemias (1).png";
import imgthree from "@/components/assets/62079be4f422ea91fa2964a3_pexels-neemias (1).png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Education = () => {
  return (
    <div className="mt-10 font-Titillium">
      <div className="h-56 w-[90%] mx-auto bg-[#dae1e6] rounded-lg "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] md:w-[80%] mx-auto relative bottom-32">
        {/* Item 1 */}
        <div>
          <div className="relative group">
            {/* Image */}
            <Image
              src={imgthree}
              width={400}
              height={500}
              alt="Cyclone Yaas Relief"
              className="rounded-lg object-cover w-full h-80"
            />
            {/* React Icon Pointer Arrow */}
            <MdArrowOutward className="absolute bottom-4 left-4 text-white font-bold text-[60px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-90 transition duration-300 rounded-lg"></div>
          </div>
          <h1 className="mt-4 text-4xl font-bold">Education Sponsorship</h1>
          <p className="text-[16px] text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <div className="relative group">
            {/* Image */}
            <Image
              src={imgone}
              width={400}
              height={500}
              alt="Cyclone Yaas Relief"
              className="rounded-lg object-cover w-full h-80"
            />
            {/* React Icon Pointer Arrow */}
            <MdArrowOutward className="absolute bottom-4 left-4 text-white font-bold text-[60px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-90 transition duration-300 rounded-lg"></div>
          </div>
          <h1 className="mt-4 text-4xl font-bold">Education Sponsorship</h1>
          <p className="text-[16px] text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
