import { DataGearUp } from "@/lib/productData";

import Card from "./Card";
import NavigationButtons from "./NavigationButtons";

const GearUpSection = () => {
  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl px-4">
      {/* Gear Up Title */}
      <p className="mb-4 text-center font-helvetica-medium text-[23px] sm:text-left">
        Gear Up
      </p>

      <div className="mb-4">
        {/* Navigation Buttons */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
          <NavigationButtons text={"Shop Men's"} />
          <NavigationButtons text={"Shop Women's"} />
        </div>

        {/* Product Cards */}
        <div className="flex w-full flex-wrap justify-center gap-4 sm:flex-nowrap sm:justify-start">
          {DataGearUp.map((d, i) => (
            <Card key={i} img={d.img} title={d.title} category={d.category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GearUpSection;
