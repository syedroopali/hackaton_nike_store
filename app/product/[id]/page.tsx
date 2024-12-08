import Image from "next/image";
import React from "react";

import { ProductPageData } from "@/lib/productData";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await params;
  const id = res.id;

  const clickedProduct: {
    id: string;
    img: string;
    title: string;
    tag: string;
    color: string;
    price: string;
    description: string;
  } = ProductPageData.find((p) => p.id === id);

  return (
    <div className=" flex items-center justify-center">
      <div className="grid min-h-screen w-[1200px] grid-cols-1 gap-4 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <Image
            src={clickedProduct?.img}
            width={653}
            height={653}
            alt={"product image"}
            className="mx-auto"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-start justify-center px-20">
          <h1 className="mb-6 text-3xl font-medium sm:text-4xl lg:text-5xl">
            {clickedProduct?.title}
          </h1>
          <p className="mb-4 text-sm text-gray-700 sm:text-base">
            {clickedProduct?.description}
          </p>
          <p className="mb-6 text-xl font-medium text-gray-900 sm:text-2xl">
            {clickedProduct?.price}
          </p>
          <div className="flex w-full items-center justify-center md:block">
            <button className="mb-10 flex items-center justify-center gap-2 rounded-full border bg-black px-6 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black md:mb-0">
              <Image
                src={"/icons/cartIcon.png"}
                width={29}
                height={29}
                alt="cart icon"
                className="hover:hidden"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
