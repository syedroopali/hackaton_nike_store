import { LINKS_CATEGORIES, LINKS_NAV } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="max-w-full  ">
      <div className="w-full bg-gray-1">
        <div className="w-[84rem] h-[2.24rem]   m-auto flex items-center justify-between">
          <div>
            <Image src="/icons/man.png" width={24} height={24} alt="man icon" />
          </div>
          <ul>
            {LINKS_NAV.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-[11px] font-helvetica-medium capitalize  px-[12px] border-r last:border-none hover:text-slate-500 transition-all "
              >
                {link.title}{" "}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* //////////////////// */}

      <div className="w-[84rem] m-auto h-[60px] grid grid-cols-3 bg-white">
        <div className="flex items-center">
          <Image
            src={"/icons/nikelogo.png"}
            width={58.85}
            height={20.54}
            alt="logo"
          />
        </div>
        <ul className="flex items-center gap-6">
          {LINKS_CATEGORIES.map((link, i) => (
            <Link
              href={link.path}
              className=" capitalize last:uppercase font-helvetica-medium text-[15px] hover:text-gray-600 transition-all"
              key={i}
            >
              {link.title}{" "}
            </Link>
          ))}
        </ul>

        {/* ///////////////////////// */}
        <div className="flex gap-6 justify-end items-center">
          <div className="w-[11.25rem] h-[2.5rem] flex items-center gap-4 bg-gray-1 rounded-full">
            <Image
              src="/icons/searchIcon.png"
              width={16.72}
              height={16.72}
              alt=" search icon"
              className="ml-4"
            />

            <input
              placeholder="Search"
              className="bg-gray-1 rounded-full w-[7rem] placeholder:text-[#cccccc] outline-none text-lg "
            />
          </div>
          <div className="flex gap-6 items-center justify-center">
            <Image
              src="/icons/heartIcon.png"
              width={24}
              height={24}
              alt="heart icon"
            />
            <Image
              src="/icons/bagIcon.png"
              width={24}
              height={24}
              alt="bag icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
