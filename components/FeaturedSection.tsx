import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  return (
    <div className="w-[84rem] m-auto mb-16">
      <h2 className="font-helvetica-medium mb-3">Featured</h2>
      <div className="mb-7">
        <Image
          src="/featuredImg.png"
          width={1344}
          height={700}
          alt="featured image"
        />
      </div>
      <div className="text-center font-helvetica-medium text-[3.375rem] ">
        <h2 className="mb-2">STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-[15px] tracking-wide mb-2">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="bg-black text-white px-5 py-2 rounded-full text-[15px]  hover:bg-white hover:text-black border border-black transition-all">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
