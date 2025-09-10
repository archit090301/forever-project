import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestProducts, setBestProducts] = useState([]);

    useEffect(() => {
  console.log("All products:", products); // Debugging
  const filtered = products.filter(product => product.bestseller);
  console.log("Filtered best sellers:", filtered); // Debugging
  setBestProducts(filtered.slice(0, 5));
}, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our best-selling products that our customers love!</p>
            </div>
            {/** Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestProducts.map((product,index) => (
                    <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price}/>
                ))}
            </div>
        </div>
    )
}

export default BestSeller;