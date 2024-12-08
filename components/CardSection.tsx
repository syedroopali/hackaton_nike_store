import Image from "next/image";
import React from "react";
import Card from "./Card";
import { Data } from "@/lib/productData";
import NavigationButtons from "./NavigationButtons";
import { text } from "stream/consumers";
const CardSection = () => {
  return (
    <div className="w-[84rem] m-auto mb-16">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[1.375rem] font-helvetica-medium">Best of Air Max</p>
        <div className="flex items-center justify-center gap-4">
          <NavigationButtons text={"Shop"} />
        </div>
      </div>

      <ul className="flex gap-3">
        {Data.map((product, i) => (
          <Card
            key={i}
            img={product.img}
            title={product.title}
            category={product.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardSection;
