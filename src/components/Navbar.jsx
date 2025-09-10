import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets.js'
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const location = useLocation();
    const {showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
          <img src={assets.logo} className='w-36' alt="" />
        </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

    <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
            <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
            <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
    </div>
        {/*Side bar for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>{setVisible(false)}} className='flex items-center gap-4 p-3' >
                    <img src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="" />
                    <p>back</p>
                </div>
                <NavLink to='/' onClick={() => setVisible(false)} className='py-2 pl-6 border-b'>Home</NavLink>
                <NavLink to='/collection' onClick={() => setVisible(false)} className='py-2 pl-6 border-b'>Collection</NavLink>
                <NavLink to='/about' onClick={() => setVisible(false)} className='py-2 pl-6 border-b'>About</NavLink>
                <NavLink to='/contact' onClick={() => setVisible(false)} className='py-2 pl-6 border-b'>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
