import Image from 'next/image'
import React from 'react'

// Images
import product1 from '../../public/product1.png'
import product2 from '../../public/product2.png'
import product3 from '../../public/product3.png'
import product4 from '../../public/product4.png'
import product5 from '../../public/product5.png'
import product6 from '../../public/product6.png'
import product7 from '../../public/product7.png'
import product8 from '../../public/product8.png'


const Products = () => {
  return (
    <div>
      {/* Products (Start) */}
        <div className='w-full grid grid-cols-4 px-10 py-5 gap-4'>
            {/* product 1 */}
          <div className='h-[400px]'>
            <Image src={product1} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Dandy chair</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>
            {/* product 2 */}

          <div className='h-[400px]'>
          <Image src={product2} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>Rustic Vase Set</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>

            {/* product 3 */}

          <div className='h-[400px]'>
          <Image src={product3} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Silky Vase</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>

            {/* product 4 */}

          <div className='h-[400px]'>
          <Image src={product4} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Lucy Lamp</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>


            {/* product 5 */}

          <div className='h-[400px]'>
          <Image src={product5} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Dandy chair</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>



          
            {/* product 6 */}

            <div className='h-[400px]'>
          <Image src={product6} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>Rustic Vase Set</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>



          
            {/* product 7 */}

            <div className='h-[400px]'>
          <Image src={product7} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Silky Vase</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>



          
            {/* product 8 */}

            <div className='h-[400px]'>
          <Image src={product1} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Lucy Lamp</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>



          
            {/* product 9 */}
          <div className='h-[400px] '>
            <Image src={product1} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Dandy chair</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>
            {/* product 10 */}

          <div className='h-[400px]'>
          <Image src={product2} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>Rustic Vase Set</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>

            {/* product 11 */}

          <div className='h-[400px]'>
          <Image src={product3} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Silky Vase</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>

            {/* product 12 */}

          <div className='h-[400px]'>
          <Image src={product4} alt='Product 1' className='h-[330px] w-full'/>
            <h1 className='text-[20px] text-[#2A254B] mt-4'>The Lucy Lamp</h1>
            <h2 className='text-[18px] text-[#2A254B]'>£250</h2>
          </div>



        </div>
        {/* Products (End) */}

<div className=' flex justify-center mt-5'>
        <button className='w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] rounded-md'>View collection</button>
    </div>
    </div>
  )
}

export default Products
