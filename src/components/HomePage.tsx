"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import bg from "@/components/assets/62079be4f422ea91fa2964a3_pexels-neemias (1).png";
import HomeButton from "./HomeButton";
import Navbar from "./Navbar";


const HomePage = () => {
  useEffect(() => {
    gsap.from(".text-line", {
      opacity: 0,
      y: 40,
      duration: 5,
      stagger: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className=" max-w-[100%] relative flex flex-col items-center justify-between h-auto overflow-x-hidden  ">
      <div className="w-full z-40">
      <Navbar/>
      </div>
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-90 -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center px-4 sm:px-8 mt-20 font-Titillium">
        <h1 className="text-white md:leading-[50px] w-full text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
          <span className="text-line">Be the change.</span> <br />
          <span className="text-line">Donate for a better tomorrow.</span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl w-full md:w-[70%] mx-auto">
          <span className="text-line">
            Help us build a future that values all human lives. Join us in our
            400+ welfare projects on education, healthcare, and livelihood.
          </span>
        </p>
        <div className="text-line mt-6">
          <HomeButton />
        </div>
      </div>

      {/* Help Component */}
      
    </div>
  );
};

export default HomePage;
