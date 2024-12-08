import React from "react";
import NavigationButtons from "./NavigationButtons";
import Card from "./Card";

import { Data, DataGearUp } from "@/lib/productData";

const GearUpSection = () => {
  return (
    <div className="w-[84rem] m-auto mb-16">
      <p className="font-helvetica-medium text-[23px] mb-4">Gear Up</p>
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-2 mb-4 justify-items-end mr-24">
          <NavigationButtons text={"Shop Men's"} />
          <NavigationButtons text={"Shop women's"} />
        </div>
        <div className="flex items-center justify-center gap-4 w-[1300px]">
          {DataGearUp.map((d, i) => (
            <Card key={i} img={d.img} title={d.title} category={d.category} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GearUpSection;
