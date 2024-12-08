import Image from "next/image";
import React from "react";

const EssentialSection = () => {
  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl px-4">
      {/* Section Title */}
      <h2 className="mb-4 text-center font-helvetica-medium text-[23px] sm:text-left">
        The Essentials
      </h2>

      {/* Image Containers */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Image
            src="/essential/essential1.png"
            width={440}
            height={540}
            alt="essential image"
            className="h-auto w-full object-cover"
          />
          <button className="absolute bottom-14 left-14 rounded-full bg-white px-4 py-2 font-helvetica-medium text-[15px] text-black">
            Mens
          </button>
        </div>
        <div className="relative">
          <Image
            src="/essential/essential2.png"
            width={440}
            height={540}
            alt="essential image"
            className="h-auto w-full object-cover"
          />
          <button className="absolute bottom-14 left-14 rounded-full bg-white px-4 py-2 font-helvetica-medium text-[15px] text-black">
            Womens
          </button>
        </div>
        <div className="relative">
          <Image
            src="/essential/essential3.png"
            width={440}
            height={540}
            alt="essential image"
            className="h-auto w-full object-cover"
          />
          <button className="absolute bottom-14 left-14 rounded-full bg-white px-4 py-2 font-helvetica-medium text-[15px] text-black">
            Kids
          </button>
        </div>
      </div>
    </div>
  );
};

export default EssentialSection;
