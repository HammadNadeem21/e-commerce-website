import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-[1100px] h-[38px] ml-[130px] mt-[50px] flex justify-between">
      <div className="w-[640px] h-[24px] mt-[5px] flex justify-between">
        {/* logo */}
        <div className="w-[118px] h-[24px] text-[23px] font-[700] leading-[24px] cursor-pointer">
          Exclusive
        </div>

        <div className="w-[367px] h-[24px] leading-[24px] font-[400]">
          <ul className="flex gap-[48px] cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>

      <div className="w-[367px] h-[38px] flex justify-between">
        <div className="w-[243px] h-[38px] relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full h-full pr-10 pl-4 text-black focus:outline-none border-none bg-[#f5f5f5]"
          />
          <CiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>
{/* Cart & Fav */}
        <div className="w-[80px] h-[32px] gap-[16px] mt-[3px] flex items-center justify-between">
        <GrFavorite size={32}/>
        <PiShoppingCartLight size={32}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
