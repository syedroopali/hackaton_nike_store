import Image from "next/image";
import React from "react";

const EssentialSection = () => {
  return (
    <div className="w-[84rem] m-auto mb-16">
      <h2 className="font-helvetica-medium text-[23px] mb-4">The Essentials</h2>
      <div className="flex justify-between">
        <div className="relative">
          <Image
            src="/essential/essential1.png"
            width={440}
            height={540}
            alt="essential image"
          />
          <button className="font-helvetica-medium  text-[15px] bg-white text-black px-4 py-2 rounded-full absolute bottom-14 left-14">
            Men's
          </button>
        </div>
        <div className="relative">
          <Image
            src="/essential/essential2.png"
            width={440}
            height={540}
            alt="essential image"
          />
          <button className="font-helvetica-medium  text-[15px] bg-white text-black px-4 py-2 rounded-full absolute bottom-14 left-14">
            Women's
          </button>
        </div>
        <div className="relative">
          <Image
            src="/essential/essential3.png"
            width={440}
            height={540}
            alt="essential image"
          />
          <button className="font-helvetica-medium  text-[15px] bg-white text-black px-4 py-2 rounded-full absolute bottom-14 left-14">
            Kid's
          </button>
        </div>
      </div>
    </div>
  );
};

export default EssentialSection;
