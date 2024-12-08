import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full mb-12">
      {/* Header Section */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center px-4">
          <h1 className="font-bold capitalize text-[15px] tracking-wide sm:text-lg">
            hello nike app
          </h1>
          <p className="text-[11px] sm:text-sm mt-1">
            Download the app to access everything Nike.{" "}
            <Link href="/" className="underline">
              Get Your Great
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-screen-xl mx-auto px-4 mt-4">
        <Image
          src="/hero.png"
          width={1344}
          height={700}
          alt="nike shoe image"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
