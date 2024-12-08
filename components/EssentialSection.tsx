import Image from "next/image";
import React from "react";

const EssentialSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mb-16 px-4">
      {/* Section Title */}
      <h2 className="font-helvetica-medium text-[23px] mb-4 text-center sm:text-left">
        The Essentials
      </h2>

      {/* Image Containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Image
            src="/essential/essential1.png"
            width={440}
            height={540}
            alt="essential image"
            className="w-full h-auto object-cover"
          />
          <button className="font-helvetica-medium text-[15px] bg-white text-black px-4 py-2 rounded-full absolute bottom-14 left-14">
            Men's
          </button>
        </div>
        <div className="relative">
          <Image
            src="/essential/essential2.png"
            width={440}
            height={540}
            alt="essential image"
            className="w-full h-auto object-cover"
          />
          <button className="font-helvetica-medium text-[15px] bg-white text-black px-4 py-2 rounded-full absolute bottom-14 left-14">
            Women's
          </button>
        </div>
        <div className="relative">
          <Image
            src="/essential/essential3.png"
            width={440}
            height={540}
            alt="essential image"
            className="w-full h-auto object-cover"
          />
          <button className="font-helvetica-medium text-[15px] bg-white text-black px-4 py-2 rounded-full absolute bottom-14 left-14">
            Kid's
          </button>
        </div>
      </div>
    </div>
  );
};

export default EssentialSection;
