import Image from "next/image";
import React from "react";

const DontMissScetion = () => {
  return (
    <div className="w-[84rem] m-auto mb-16">
      <h2 className="font-helvetica-medium text-[22px] mb-3">Don't miss</h2>
      <div className="">
        <div className="mb-8">
          <Image
            src={"/dontmiss.png"}
            width={1344}
            height={700}
            alt="donst miss image"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-helvetica-medium text-[3.25rem] mb-2 tracking-wider">
            FLIGHT ESSENTIALS
          </h2>
          <p className="mb-6">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full text-[15px]  hover:bg-white hover:text-black border border-black transition-all">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontMissScetion;
