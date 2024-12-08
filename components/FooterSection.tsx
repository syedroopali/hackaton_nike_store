import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  [
    {
      title: "become a member",
      Path: "/",
    },
    {
      title: "sign up for email",
      Path: "/",
    },
    {
      title: "send us feedback",
      Path: "/",
    },
    {
      title: "Student Discounts",
      Path: "/",
    },
  ],
  [
    { title: "Order Status", Path: "/" },
    { title: "Delivery", Path: "/" },
    { title: "Returns", Path: "/" },
    { title: "Payment Options", Path: "/" },
    { title: "Contact Us On Nike.com Inquiries", Path: "/" },
    { title: "Contact Us On All Other Inquiries", Path: "/" },
  ],
  [
    {
      title: "News",
      Path: "/",
    },
    {
      title: "careers",
      Path: "Investors",
    },
    {
      title: "Investors",
      Path: "/",
    },
    {
      title: "sustainability",
      Path: "/",
    },
  ],
];

const FooterSection = () => {
  return (
    <div className="w-full bg-black text-white px-4 sm:px-2 md:px-0">
      <div className="w-full lg:w-[84rem] m-auto mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-[750px] mb-6 lg:mb-0">
            <div>
              <p className="text-[10px] mb-4 mt-12">FIND A STORE</p>
              <LinkMap
                no={0}
                otherClasses={"uppercase hover:text-slate-200 "}
              />
            </div>
            <div>
              <p className="text-[10px] mb-4 mt-12">GET HELP</p>
              <LinkMap
                no={1}
                otherClasses={"capitalize hover:text-white text-[#7E7E7E] "}
              />
            </div>
            <div>
              <p className="text-[10px] mb-4 mt-12">ABOUT NIKE</p>
              <LinkMap
                no={2}
                otherClasses={"capitalize hover:text-white text-[#7E7E7E] "}
              />
            </div>
          </div>
          <div className="mt-6 lg:mt-12 self-start">
            <Image
              src="/social.png"
              width={337}
              height={37}
              alt="social links"
            />
          </div>
        </div>
      </div>

      {/* ///////////////////////// */}
      <div className="w-full lg:w-[84rem] m-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
        <div className="flex items-center justify-center gap-4 mb-4 lg:mb-0">
          <Image
            src={"/icons/locationIcon.png"}
            width={9.38}
            height={13.12}
            alt="location icon"
          />
          <p className="text-[11] ">India</p>
          <p className="ml-6 text-[11px] text-[#7E7E7E] ">
            &copy; 2023 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 text-[#7E7E7E] flex-wrap ">
          <Link
            href={"/"}
            className="hover:text-white transition-all mb-2 lg:mb-0"
          >
            Guides
          </Link>
          <Link
            href={"/"}
            className="hover:text-white transition-all mb-2 lg:mb-0"
          >
            Terms of Sales
          </Link>
          <Link
            href={"/"}
            className="hover:text-white transition-all mb-2 lg:mb-0"
          >
            Terms of Use
          </Link>
          <Link
            href={"/"}
            className="hover:text-white transition-all mb-2 lg:mb-0"
          >
            Nike Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

const LinkMap = ({
  no,
  otherClasses,
}: {
  no: number;
  otherClasses: string;
}) => {
  return (
    <ul className="flex items-start justify-center flex-col gap-4 ">
      {links[no].map((link, i) => (
        <Link
          href={link.Path}
          key={i}
          className={`text-[10px] text-white ${otherClasses} transition-all`}
        >
          {link.title}
        </Link>
      ))}
    </ul>
  );
};

export default FooterSection;
