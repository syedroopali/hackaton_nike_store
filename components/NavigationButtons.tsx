import Image from "next/image";
import React from "react";

const NavigationButtons = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-[15px] font-helvetica-medium">{text} </p>
      <button className="rounded-full w-12 h-12  flex items-center justify-center bg-[#F5F5F5] ">
        <Image
          src="/icons/leftArrow.png"
          alt="left arrow icon"
          width={8}
          height={15.5}
        />
      </button>
      <button className="rounded-full w-12 h-12 bg-[#E5E5E5] flex justify-center items-center">
        <Image
          src="/icons/rightArrow.png"
          alt="left arrow icon"
          width={8}
          height={15.5}
        />
      </button>
    </div>
  );
};

export default NavigationButtons;
