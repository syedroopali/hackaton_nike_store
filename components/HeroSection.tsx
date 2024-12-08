import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mb-12 w-full">
      {/* Header Section */}
      <div className="bg-gray-100 py-2">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 text-center">
          <h1 className="text-[15px] font-bold capitalize tracking-wide sm:text-lg">
            hello nike app
          </h1>
          <p className="mt-1 text-[11px] sm:text-sm">
            Download the app to access everything Nike.{" "}
            <Link href="/" className="underline">
              Get Your Great
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="mx-auto mt-4 max-w-screen-xl px-4">
        <Image
          src="/hero.png"
          width={1344}
          height={700}
          alt="nike shoe image"
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
