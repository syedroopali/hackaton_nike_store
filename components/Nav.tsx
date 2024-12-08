import Image from "next/image";
import Link from "next/link";

import { LINKS_CATEGORIES, LINKS_NAV } from "@/constants/links";

const Nav = () => {
  return (
    <nav className="w-full">
      {/* Top Navigation */}
      <div className="w-full bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[2.24rem] px-4 sm:px-8">
          <div>
            <Image src="/icons/man.png" width={24} height={24} alt="man icon" />
          </div>
          <ul className="hidden md:flex">
            {LINKS_NAV.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-[11px] font-helvetica-medium capitalize px-[12px] border-r last:border-none hover:text-slate-500 transition-all"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 items-center px-4 sm:px-8 h-[60px]">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <Image
              src="/icons/nikelogo.png"
              width={58.85}
              height={20.54}
              alt="logo"
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center justify-center gap-6">
            {LINKS_CATEGORIES.map((link, i) => (
              <Link
                href={link.path}
                key={i}
                className="capitalize last:uppercase font-helvetica-medium text-[15px] hover:text-gray-600 transition-all"
              >
                {link.title}
              </Link>
            ))}
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center justify-end gap-4">
            <div className="hidden sm:flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
              <Image
                src="/icons/searchIcon.png"
                width={16.72}
                height={16.72}
                alt="search icon"
              />
              <input
                placeholder="Search"
                className="bg-transparent placeholder-gray-500 outline-none text-sm w-52 md:w-45 lg:w-40 "
              />
            </div>
            <div className="flex gap-4">
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
      </div>
    </nav>
  );
};

export default Nav;
