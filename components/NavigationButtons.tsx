import Image from "next/image";
import React from "react";

const NavigationButtons = ({ text }: { text: string }) => {
  return (
    <div className="hidden flex-wrap items-center justify-center gap-4 sm:flex">
      <p className="font-helvetica-medium text-[15px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
        {text}
      </p>
      <button className="flex size-12 items-center justify-center rounded-full bg-[#F5F5F5] sm:size-10">
        <Image
          src="/icons/leftArrow.png"
          alt="left arrow icon"
          width={8}
          height={15.5}
        />
        <p className="hidden">a</p>
      </button>
      <button className="flex size-12 items-center justify-center rounded-full bg-[#E5E5E5] sm:size-10">
        <Image
          src="/icons/rightArrow.png"
          alt="right arrow icon"
          width={8}
          height={15.5}
        />
        <p className="hidden">a</p>
      </button>
    </div>
  );
};

export default NavigationButtons;
