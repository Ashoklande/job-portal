import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='2xl:px-20 flex justify-between gap-4 items-center px-4 mx-auto mt-3 py-3 '>
        <img src={assets.logo} alt="" />
        <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Ashoka.dev | All Right reserved.</p>
         <div className='flex gap-6'>
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
         </div>
    </div>
  )
}

export default Footer