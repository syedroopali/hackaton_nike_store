import Link from "next/link";
import React from "react";

const Links = [
  ["air force1", "Huarache", "Air Max 90", "Air Max 95"],
  ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
  ["All Clothing", " Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
  [
    "Infant & Toddler Shoes",
    "Kids' Shoes",
    "Kids' Jordan Shoes",
    "Kids' Basketball Shoes",
  ],
];

const FooterLinksSection = () => {
  return (
    <div className="w-[55rem] m-auto mb-16">
      <div className="grid grid-cols-4">
        <div>
          <p className="font-helvetica-medium text-[15px] mb-6">Icons</p>
          <LinksMap num={0} />
        </div>
        <div>
          <p className="font-helvetica-medium text-[15px] mb-6">Shoes</p>
          <LinksMap num={1} />
        </div>
        <div>
          <p className="font-helvetica-medium text-[15px] mb-6">Clothing</p>
          <LinksMap num={2} />
        </div>
        <div>
          <p className="font-helvetica-medium text-[15px] mb-6">Kid's</p>
          <LinksMap num={3} />
        </div>
      </div>
    </div>
  );
};

const LinksMap = ({ num }: { num: number }) => {
  return (
    <ul className="flex flex-col gap-3">
      {Links[num].map((link, i) => (
        <Link
          href="/"
          key={i}
          className="text-[#757575] text-[15px] capitalize hover:text-black transition-all"
        >
          {link}{" "}
        </Link>
      ))}
    </ul>
  );
};

export default FooterLinksSection;
