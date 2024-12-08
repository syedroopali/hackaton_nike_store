import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl px-4">
      {/* Section Heading */}
      <h2 className="mb-3 text-center font-helvetica-medium text-lg sm:text-xl md:text-2xl">
        Featured
      </h2>

      {/* Featured Image */}
      <div className="mb-7">
        <Image
          src="/featuredImg.png"
          width={1344}
          height={700}
          alt="featured image"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Text and Button */}
      <div className="text-center font-helvetica-medium text-2xl sm:text-3xl md:text-4xl">
        <h2 className="mb-2 text-xl sm:text-3xl">STEP INTO WHAT FEELS GOOD</h2>
        <p className="mb-2 text-sm tracking-wide sm:text-base">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="rounded-full border border-black bg-black px-5 py-2 text-[15px] text-white transition-all hover:bg-white hover:text-black sm:text-base">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
