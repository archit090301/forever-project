import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  useEffect(()=>{
    setFilteredProducts(products);
  },[products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/** Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/** Categories filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="category1" className='w-3' value={'men'} />MEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="category2" className='w-3' value={'women'} />WOMEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="category" id="category3" className='w-3' value={'kids'} />KIDS
            </p>
          </div>
        </div>
        {/** Sub categories filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input type="checkbox" name="subcategory" id="subcategory1" className='w-3' value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="subcategory" id="subcategory2" className='w-3' value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="subcategory" id="subcategory3" className='w-3' value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/** Products display */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'}/>
          {/** Sorting options */}
          <select className='border border-gray-300 px-2 text-sm' name="sort" id="sort">
            <option value="relevant">Relevant</option>
            <option value="low_high">Price: Low to High</option>
            <option value="high_low">Price: High to Low</option>
          </select>
        </div>
        {/** Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filteredProducts.map((items, index)=>(
            <ProductItem key={index} id={items._id} image={items.image} name={items.name} price ={items.price}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
