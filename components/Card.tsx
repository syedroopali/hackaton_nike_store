import Image from "next/image";
import React from "react";

interface ICard {
  img: string;
  title: string;
  category: string;
}

const Card = ({ img, title, category }: ICard) => {
  return (
    <div className="w-full sm:w-[calc(100%-1rem)] md:w-[calc(100%-1rem)] lg:w-full mb-4">
      <div className="mb-4">
        {/* Ensure image is responsive and covers container */}
        <Image
          src={img}
          width={441}
          height={441}
          alt="product image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        {/* Title text size scales with screen size */}
        <p className="font-helvetica-medium text-[15px] sm:text-[14px] lg:text-[16px]">
          {title}
        </p>
        <p className="font-helvetica-light text-[#757575] text-[15px] sm:text-[14px] lg:text-[16px]">
          {category}
        </p>
      </div>
    </div>
  );
};

export default Card;
