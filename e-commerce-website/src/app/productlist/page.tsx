import Image from 'next/image'
import React from 'react'
import bg from '../../../public/bg.png'
import { SelectDemo } from '@/components/Select'
import Products from '@/components/Products'

const ProductList = () => {
  return (
    <div>
      
      {/* Main div (start) */}
      <div className='w-full h-auto'>

        {/* Top BG (Start) */}
<div className='w-full h-[170px]'>
    <Image src={bg} alt='background' height={5000} width={5000} className='w-full h-[170px]'/>

</div>
        {/* Top BG (End) */}

        {/* Filters (Start) */}
<div className='w-full h-[64px] grid grid-cols-2 gap-2 py-3 px-5'>

<div className='flex'>
  <SelectDemo name='Category'/>
  <SelectDemo name='Product type'/>
  <SelectDemo name='Price'/>
  <SelectDemo name='Brand'/>
  </div>

  <div className='flex gap-5 justify-end'>
    <h1 className='mt-2'>Sorting by:</h1>
  <SelectDemo name='Brand'/>

  </div>


</div>
        {/* Filters (End) */}


        {/* Products (Start) */}
        <Products/>
        {/* Products (End) */}



      


      </div>
      {/* Main div (End) */}

    </div>
  )
}

export default ProductList;