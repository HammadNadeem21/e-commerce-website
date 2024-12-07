import React from 'react'

const Navbar = () => {
  return (
    // <div>
    <div className='w-[1100px] h-[38px] ml-[130px] mt-[50px] flex'>
      
      <div className='w-[675px] h-[24px] mt-[5px] flex justify-between'>
        {/* logo */}
        <div className='w-[118px] h-[24px] text-[23px] font-[700] leading-[24px] cursor-pointer'>Exclusive</div>

        <div className='w-[367px] h-[24px] leading-[24px] font-[400]'>
            <ul className='flex gap-[48px] cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Signup</li>
            </ul>
        </div>
      </div>

      <div className='w-[347px] h-[38px] bg-purple-300'></div>
    </div>
  )
}

export default Navbar
