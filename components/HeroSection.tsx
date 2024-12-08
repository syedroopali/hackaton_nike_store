import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full mb-12">
      <div className="bg-gray-1 py-1">
        <div className="w-[84rem] m-auto h-[3.625rem] flex items-center justify-center flex-col">
          <h1 className="font-bold capitalize text-[15px] tracking-wide">
            hello nike app
          </h1>
          <p className="text-[11px] ">
            Download the app to access everything Nike.{" "}
            <Link href="/" className="underline">
              Get Your Great
            </Link>
          </p>
        </div>
      </div>

      <div className="w-[84rem] m-auto">
        <Image
          src={"/hero.png"}
          width={1344}
          height={700}
          alt="nike shoe image
        "
        />
      </div>
    </div>
  );
};

export default HeroSection;
