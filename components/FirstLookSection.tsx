import React from "react";

const FirstLookSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <div className="w-[39rem] text-center">
        <p className="capitalize text-[15px] font-helvetica-medium ">
          first look
        </p>
        <h3 className="uppercase font-helvetica-medium text-[3.5rem] tracking-wide ">
          nike air max pulse
        </h3>
        <p className="px-9 text-[15px] mb-8 leading-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>
        <div className="flex gap-2 items-center justify-center">
          <button className="bg-black text-white capitalize rounded-full font-medium px-6 py-2 hover:bg-white hover:text-black border border-black transition-all">
            notify me
          </button>
          <button className="bg-black text-white capitalize rounded-full  font-medium px-6 py-2  hover:bg-white hover:text-black border border-black transition-all">
            shop air max
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstLookSection;
