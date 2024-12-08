import Image from "next/image";
import Link from "next/link";
import React from "react";

// import ProductCard from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import { ProductPageData } from "@/lib/productData";

const list = [
  "shoes",
  "sports bras",
  "tops & T-shirts",
  "Hoodies & SweetShirts",
  "jackets",
  "Trousers & Tights",
  "shorts",
  "Tracksuits",
  "Jumpsuits & Rompers",
  "skirts & dresses",
  "socks",
  "Accessories & Equipments",
];

const page = () => {
  return (
    <div className="m-auto mt-12 w-full px-4 md:w-[90%] lg:w-[76rem]">
      {/* Header */}
      <div className="mb-5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="font-helvetica-medium text-[20px] md:text-[24px]">
            New (500)
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[14px] text-[#111111] md:text-[16px]">
            Hide Filters
          </p>
          <div>
            <Image
              src={"/icons/filterIcon.png"}
              width={25}
              height={25}
              alt="filter icon"
              className="transition-transform duration-200 hover:rotate-45"
            />
          </div>
          <div>
            <Image
              src={"/icons/sortbyIcon.png"}
              width={100}
              height={28}
              alt="sort by Icon"
              className="transition-transform duration-200 hover:rotate-12"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {list.map((li) => (
            <Link
              key={li}
              href={"/"}
              className="mb-4 font-helvetica-medium text-[14px] capitalize transition-transform duration-200 hover:scale-105 hover:text-[#9E3500] hover:underline md:text-[15px]"
            >
              {li}
            </Link>
          ))}
          <hr className="my-4" />

          {/* Filters */}
          {[
            { title: "Gender", options: ["Men", "Women", "Unisex"] },
            { title: "Kids", options: ["Boys", "Girls"] },
            {
              title: "Shop By Price",
              options: ["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"],
            },
          ].map((filter) => (
            <div key={filter.title}>
              <div className="flex justify-between">
                <p className="font-helvetica-medium text-[14px] md:text-[16px]">
                  {filter.title}
                </p>
                <Image
                  src={"/icons/uparrowIcon.png"}
                  width={14}
                  height={14}
                  alt="uparrow icon"
                  className="h-4"
                />
              </div>
              <div className="mt-2 flex flex-col gap-2 text-[14px] md:text-[15px]">
                {filter.options.map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-2 transition-colors duration-200 hover:text-[#9E3500]"
                  >
                    <input type="checkbox" />
                    <p>{option}</p>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
          {ProductPageData.map((product, i) => (
            <ProductCard i={i} key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
