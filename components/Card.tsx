import Image from "next/image";
import React from "react";

interface ICard {
  img: string;
  title: string;
  category: string;
}

const Card = ({ img, title, category }: ICard) => {
  return (
    <div>
      <div className="mb-4">
        <Image src={img} width={441} height={441} alt="product image" />
      </div>
      <div>
        <p className="font-helvetica-medium text-[15px] ">{title} </p>
        <p className="font-helvetica-light text-[#757575] text-[15px] ">
          {category}{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
