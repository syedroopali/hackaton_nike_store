import React from "react";

const FirstLookSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 px-4">
      <div className="w-full max-w-screen-md text-center">
        {/* Title */}
        <p className="capitalize text-[15px] font-helvetica-medium">
          first look
        </p>
        <h3 className="uppercase font-helvetica-medium text-3xl sm:text-4xl md:text-5xl tracking-wide mt-2">
          nike air max pulse
        </h3>

        {/* Description */}
        <p className="px-2 sm:px-8 text-[14px] sm:text-[15px] mb-8 leading-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-black text-white capitalize rounded-full font-medium px-6 py-2 hover:bg-white hover:text-black border border-black transition-all">
            notify me
          </button>
          <button className="bg-black text-white capitalize rounded-full font-medium px-6 py-2 hover:bg-white hover:text-black border border-black transition-all">
            shop air max
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstLookSection;
