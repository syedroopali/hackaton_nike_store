import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mb-16 px-4">
      {/* Section Heading */}
      <h2 className="font-helvetica-medium text-center mb-3 text-lg sm:text-xl md:text-2xl">
        Featured
      </h2>

      {/* Featured Image */}
      <div className="mb-7">
        <Image
          src="/featuredImg.png"
          width={1344}
          height={700}
          alt="featured image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text and Button */}
      <div className="text-center font-helvetica-medium text-2xl sm:text-3xl md:text-4xl">
        <h2 className="mb-2 text-xl sm:text-3xl">STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm sm:text-base tracking-wide mb-2">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="bg-black text-white px-5 py-2 rounded-full text-[15px] sm:text-base hover:bg-white hover:text-black border border-black transition-all">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
