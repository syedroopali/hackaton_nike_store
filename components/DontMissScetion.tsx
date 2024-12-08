import Image from "next/image";
import React from "react";

const DontMissScetion = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mb-16 px-4">
      {/* Section Title */}
      <h2 className="font-helvetica-medium text-[22px] mb-3 text-center sm:text-left">
        Don't miss
      </h2>

      <div>
        {/* Image */}
        <div className="mb-8">
          <Image
            src={"/dontmiss.png"}
            width={1344}
            height={700}
            alt="dont miss image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text and Button */}
        <div className="flex flex-col items-center justify-center text-center sm:text-left">
          <h2 className="font-helvetica-medium text-[2.25rem] sm:text-[3.25rem] mb-2 tracking-wider">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-sm sm:text-base mb-6">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full text-[15px] sm:text-base hover:bg-white hover:text-black border border-black transition-all">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontMissScetion;
