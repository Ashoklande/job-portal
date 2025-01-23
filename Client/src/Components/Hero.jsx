import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'


const Hero = () => {
    const{setsearchFilter,setisSearched}=useContext(AppContext);
 

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearchHandler=()=>{
        setsearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value
        })
        setisSearched(true);
        
    }

  return (
    <div>
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-purple-800 to bg-purple-950 text-white py-16 text-center mx-2 rounded-xl '>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Towards Your Future.</p>
            <div  className='flex max-w-xl items-center sm:mx-auto bg-white text-gray-600 pl-4 mx-4 '>
                <div className='flex items-center'>
                    <img className='sm:h-5 h-4' src={assets.search_icon} alt="serch" />
                    <input 
                    ref={titleRef}
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    type="text" placeholder='Search for jobs' />
                </div>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt="loc" />
                    <input 
                    ref={locationRef}
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    type="text" placeholder='Location' />
                </div>
                <button onClick={onSearchHandler} className='bg-blue-700 px-6 py-2 m-1 rounded-md text-white'>Search</button>
             </div>
            </div>

            <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md'>
                <div className='flex flex-wrap gap-10 md:gap-16'>
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="company logo" />
                    <img className='h-6' src={assets.walmart_logo} alt="company logo" />
                    <img className='h-6' src={assets.accenture_logo} alt="company logo" />
                    <img className='h-6' src={assets.samsung_logo} alt="company logo" />
                    <img className='h-6' src={assets.amazon_logo} alt="company logo" />
                    <img className='h-6' src={assets.adobe_logo} alt="company logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero