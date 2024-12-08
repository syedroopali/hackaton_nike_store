import React from "react";

const FirstLookSection = () => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-screen-md text-center">
        {/* Title */}
        <p className="font-helvetica-medium text-[15px] capitalize">
          first look
        </p>
        <h3 className="mt-2 font-helvetica-medium text-3xl uppercase tracking-wide sm:text-4xl md:text-5xl">
          nike air max pulse
        </h3>

        {/* Description */}
        <p className="mb-8 px-2 text-[14px] leading-6 sm:px-8 sm:text-[15px]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-full border border-black bg-black px-6 py-2 font-medium capitalize text-white transition-all hover:bg-white hover:text-black">
            notify me
          </button>
          <button className="rounded-full border border-black bg-black px-6 py-2 font-medium capitalize text-white transition-all hover:bg-white hover:text-black">
            shop air max
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstLookSection;
