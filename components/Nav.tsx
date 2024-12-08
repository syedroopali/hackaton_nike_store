import Image from "next/image";
import Link from "next/link";

import { LINKS_CATEGORIES, LINKS_NAV } from "@/constants/links";

const Nav = () => {
  return (
    <nav className="w-full">
      {/* Top Navigation */}
      <div className="w-full bg-gray-100">
        <div className="mx-auto flex h-[2.24rem] max-w-screen-xl items-center justify-between px-4 sm:px-8">
          <div>
            <Image src="/icons/man.png" width={24} height={24} alt="man icon" />
          </div>
          <ul className="hidden md:flex">
            {LINKS_NAV.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="border-r px-[12px] font-helvetica-medium text-[11px] capitalize transition-all last:border-none hover:text-slate-500"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-white">
        <div className="mx-auto grid h-[60px] max-w-screen-xl grid-cols-3 items-center px-4 sm:px-8">
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
          <ul className="hidden items-center justify-center gap-6 md:flex">
            {LINKS_CATEGORIES.map((link, i) => (
              <Link
                href={link.path}
                key={i}
                className="font-helvetica-medium text-[15px] capitalize transition-all last:uppercase hover:text-gray-600"
              >
                {link.title}
              </Link>
            ))}
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center justify-end gap-4">
            <div className="hidden items-center gap-4 rounded-full bg-gray-100 px-4 py-2 sm:flex">
              <Image
                src="/icons/searchIcon.png"
                width={16.72}
                height={16.72}
                alt="search icon"
              />
              <input
                placeholder="Search"
                className="md:w-45 w-52 bg-transparent text-sm outline-none placeholder:text-gray-500 lg:w-40 "
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
