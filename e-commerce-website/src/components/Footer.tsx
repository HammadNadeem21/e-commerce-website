import { VscSend } from "react-icons/vsc";
import React from 'react'

const Footer = () => {
  return (
    // <div className='bg-black'>
      
    //   <div className='w-full h-[440px]'>
    //     <div className='bg-gray-300 w-[1170px] h-[236px] mx-[80px] top-1'></div>

    //   </div>

    // </div>

    <div className="bg-black">
  <div className="w-full h-[440px] relative">
    <div className=" w-[1170px] h-[236px] absolute top-[80px] left-[80px] gap-[87px] flex">

        <div className='w-[217px] h-[188px] gap-[16px]'>
            <div className='w-[206px] h-[124px] gap-[24px] text-white'>
                <div className='w-[118px] h-[76px] gap-[24px]'>
                    <h1 className='text-[24px] font-[700]'>Exclusive</h1>
                    <h2 className='text-[20px] font-[500] mt-2'>Subscribe</h2>
                </div>

                <p className='w-[206px] h-[24px] text-[16px] font-[400] mt-[20px]'>Get 10% off your first order</p>
            </div>

            <div className='w-[217px] h-[48px] gap-[32px] border-[1.5px] mt-[12px]
            flex relative'>
            <input
            type="text"
            placeholder="Enter your email"
            className="w-[189px] h-full pr-10 pl-4 text-white focus:outline-none border-black bg-transparent"
          />
          
          <VscSend className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
        </div>

        <div className='w-[175px] h-[180px] gap-[24px] text-white'>
            <div className="w-[81px] h-[28px]">
                <h1 className="text-20px font-[500]">Support</h1>
            </div>

            <div className="w-[175px] h-[128px] gap-[16px] mt-2">
                <p className="text-[16px] font-[400] mt-[6px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className="text-[16px] font-[400] mt-[6px]">exclusive@gmail.com</p>
                <p className="text-[16px] font-[400] mt-[6px]">+88015-88888-9999</p>
            </div>
        </div>

        <div className='w-[123px] h-[236px] gap-[24px] text-white'>

            <div className="w-[85px] h-[28px]">
                <h1 className="text-[20px] font-[500]">Account</h1>
            </div>

            <div className="w-[123px] h-[184px] mt-[23px]">
                <h2 className="text-[16px] font-[400] mt-2">My Account</h2>
                <h2 className="text-[16px] font-[400] mt-2">Login / Register</h2>
                <h2 className="text-[16px] font-[400] mt-2">Cart</h2>
                <h2 className="text-[16px] font-[400] mt-2">Wishlist</h2>
                <h2 className="text-[16px] font-[400] mt-2">Shop</h2>
            </div>
        </div>
        <div className='w-[109px] h-[196px] gap-[24] bg-yellow-300'></div>
        <div className='w-[198px] h-[210px] gap-[24px] bg-yellow-300'></div>
    </div>

    <div className='w-full h-[40px] bg-blue-300 absolute top-[380px]'></div>
  </div>
</div>

  )
}

export default Footer
