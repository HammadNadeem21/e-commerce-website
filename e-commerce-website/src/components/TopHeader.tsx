import React from "react";
// Poppins Font
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",

  display: "swap",
  subsets: ["latin"],
});

const TopHeader = () => {
  return (
    <div className="bg-black">
    <div className="w-full h-[48px] bg-black py-[12px]">
      <div className="w-[859px] h-[24px] ml-[445px]">
        <div
          className={`${poppins.className} w-[550px] h-[24] flex items-center gap-[10px]`}
        >
          <h1 className="text-[#D9D9D9] text-[14px] font-normal whitespace-nowrap">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <button className="underline w-[68px] text-[#FAFAFA] font-semibold text-[14px]">
            ShopNow
          </button>
        </div>

        <div className="w-[78px] h-[24px]"></div>
      </div>
    </div>
    </div>
  );
};

export default TopHeader;
