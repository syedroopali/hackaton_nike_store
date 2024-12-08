import Image from "next/image";
import React from "react";
import Card from "./Card";
import { Data } from "@/lib/productData";
import NavigationButtons from "./NavigationButtons";

const CardSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mb-16 px-4 sm:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-[1.375rem] font-helvetica-medium">Best of Air Max</p>
        <div className="flex items-center justify-center gap-4">
          <NavigationButtons text={"Shop"} />
        </div>
      </div>

      {/* Product Cards */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
