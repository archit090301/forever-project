import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-600 mt-3'>Join our newsletter for the latest updates.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input required type="email" name="email" id="email" placeholder="Enter your email" className='w-full sm:flex-1 outline-none' />
            <button className='bg-black text-white py-4 px-10 text-xs' type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox