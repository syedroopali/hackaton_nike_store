import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProductPageData } from "@/lib/productData";

interface ICard {
  img: string;
  title: string;
  category: string;
}

const Card = ({ img, title, category, i }: ICard) => {
  return (
    <Link
      href={`/product`}
      className="mb-4 w-full sm:w-[calc(100%-1rem)] md:w-[calc(100%-1rem)] lg:w-full"
    >
      <div className="mb-4">
        {/* Ensure image is responsive and covers container */}
        <Image
          src={img}
          width={441}
          height={441}
          alt="product image"
          className="h-auto w-full object-cover"
        />
      </div>
      <div>
        {/* Title text size scales with screen size */}
        <p className="font-helvetica-medium text-[15px] sm:text-[14px] lg:text-[16px]">
          {title}
        </p>
        <p className="font-helvetica-light text-[15px] text-[#757575] sm:text-[14px] lg:text-[16px]">
          {category}
        </p>
      </div>
    </Link>
  );
};

export default Card;
