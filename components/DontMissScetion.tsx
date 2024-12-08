import Image from "next/image";
import React from "react";

const DontMissScetion = () => {
  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl px-4">
      {/* Section Title */}
      <h2 className="mb-3 text-center font-helvetica-medium text-[22px] sm:text-left">
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
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Text and Button */}
        <div className="flex flex-col items-center justify-center text-center sm:text-left">
          <h2 className="mb-2 font-helvetica-medium text-[2.25rem] tracking-wider sm:text-[3.25rem]">
            FLIGHT ESSENTIALS
          </h2>
          <p className="mb-6 text-sm sm:text-base">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="rounded-full border border-black bg-black px-6 py-2 text-[15px] text-white transition-all hover:bg-white hover:text-black sm:text-base">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontMissScetion;
