import { Data } from "@/lib/productData";

import Card from "./Card";
import NavigationButtons from "./NavigationButtons";

const CardSection = () => {
  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl px-4 sm:px-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <p className="font-helvetica-medium text-[1.375rem]">Best of Air Max</p>
        <div className="flex items-center justify-center gap-4">
          <NavigationButtons text={"Shop"} />
        </div>
      </div>

      {/* Product Cards */}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {Data.map((product, i) => (
          <Card
            key={i}
            i={i}
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
