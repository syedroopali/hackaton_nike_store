import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="h-auto w-full max-w-[380px] sm:h-[489px]">
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="mb-6">
            <Image
              src={"/icons/nikelogo.png"}
              width={60}
              height={60}
              alt="nike logo"
            />
          </div>
          <div className="text-center">
            <h2 className="font-helvetica-medium text-[18px] leading-7 sm:text-[20px] md:text-[24px] lg:text-[28px]">
              YOUR ACCOUNT <br />
              FOR EVERYTHING <br />
              NIKE
            </h2>
          </div>
        </div>

        <div className="">
          <form
            action="#"
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="mb-3 flex w-full flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Address"
                className="h-[40px] w-full border border-[#E5E5E5] px-4 transition-all placeholder:text-[#8D8D8D] focus:border-blue-500 sm:w-[324px]"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="h-[40px] w-full border border-[#E5E5E5] px-4 transition-all placeholder:text-[#8D8D8D] focus:border-blue-500 sm:w-[324px]"
              />
            </div>

            <div className="flex w-full justify-between sm:w-[324px]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="check"
                  placeholder="check"
                  className="hover:ring-2 hover:ring-blue-500"
                />
                <label htmlFor="check " className="text-[12px] text-[#8D8D8D] ">
                  Keep me logged in
                </label>
              </div>
              <div>
                <p className="text-[12px] text-[#8D8D8D] ">
                  Forgot your password?
                </p>
              </div>
            </div>

            <div className="mb-3 flex w-full items-center justify-center text-[12px] text-[#8D8D8D] sm:w-[269px]">
              <p className="text-center">
                By logging in, you agree to Nike's Privacy Policy and Terms of
                Use.
              </p>
            </div>

            <button
              type="submit"
              className="mb-4 w-full rounded-md bg-black py-3 text-[11px] text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:w-[324px]"
            >
              SIGN IN
            </button>

            <div>
              <p className="text-[12px] text-[#8D8D8D] ">
                Not a Member?{" "}
                <Link
                  href={"/"}
                  className="text-[#111111] transition-colors hover:text-black hover:underline"
                >
                  Join Us.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
