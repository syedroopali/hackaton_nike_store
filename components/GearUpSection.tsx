import React from "react";
import NavigationButtons from "./NavigationButtons";
import Card from "./Card";

import { Data, DataGearUp } from "@/lib/productData";

const GearUpSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mb-16 px-4">
      {/* Gear Up Title */}
      <p className="font-helvetica-medium text-[23px] mb-4 text-center sm:text-left">
        Gear Up
      </p>

      <div className="mb-4">
        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 mb-4">
          <NavigationButtons text={"Shop Men's"} />
          <NavigationButtons text={"Shop Women's"} />
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full">
          {DataGearUp.map((d, i) => (
            <Card key={i} img={d.img} title={d.title} category={d.category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GearUpSection;
