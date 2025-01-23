import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';

const RecuriterLogin = ({value}) => {

    const [state, setstate] = useState('Login');

    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');

    const [image, setimage] = useState(false);

    const [isTextDataSubmitted, setisTextDataSubmitted] = useState(false);

    const onsubmithandle=async(e)=>{
        e.preventDefault();
        if (state!=='Login' && !isTextDataSubmitted) {
            setisTextDataSubmitted(true)
        }
    }

    useEffect(()=>{
        document.body.style.overflow='hidden';
        
        return()=>{
            document.body.style.overflow='unset';
        }
    },[])
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form onSubmit={onsubmithandle} className='relative bg-white p-10 rounded-xl text-slate-500 '>
            <h1 className='text-center text-2xl text-neutral-800 font-medium'>Recuriter {state}</h1>
            <p className='text-sm text-center'>Welcome back! please sign in to login</p>

                {
                    state==='Sign-UP' && isTextDataSubmitted ? 
                    <>
                    <div className='flex items-center  gap-2 mt-3'>
                        <label htmlFor="image">
                            <img className='w-16 rounded-full ' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                            <input  onChange={e=>setimage(e.target.files[0])} id='image' type="file" hidden  />
                        </label>
                            <p>Upload Company logo</p>
                    </div>
                    </>: <>
               {
                state!=="Login" &&(<div className='flex items-center px-4 py-2 gap-2 border rounded-full mt-5'>
                    <img src={assets.person_icon} alt="" />
                    <input className='outline-none' onChange={e=>setname(e.target.value)} value={name} type="text" placeholder='Company Name' required />
                   </div>)
               }
               <div className='flex items-center px-4 py-2 gap-2 border rounded-full mt-5' >
                <img src={assets.email_icon} alt="" />
                <input className='outline-none' onChange={e=>setemail(e.target.value)} value={email} type="text" placeholder='Email Id' required />
               </div>
               <div className='flex items-center px-4 py-2 gap-2 border rounded-full mt-5' >
                <img src={assets.lock_icon} alt="" />
                <input className='outline-none' onChange={e=>setpassword(e.target.value)} value={password} type="text" placeholder='Password' required />
               </div>
             
              {state==='Login' && <p className='text-blue-600 mt-5 font-medium cursor-pointer'>Forgot Password</p>}
            </>

                }

           

            <button  type='submit' className='w-full bg-blue-600 text-white px-4 py-2 rounded-full mt-5 '>{state==='Login'?'Login':isTextDataSubmitted?'create account':'Next'}</button>

                {
                    state==='Login'? <p className='text-center mt-4'>Don't have an account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Sign-UP')}>Sign UP here</span></p>
                    : <p className='text-center mt-4'>Already have an account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Login')}>Login here</span></p>
               
                }
               
               <img onClick={()=>value.setshowRecuriterLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer h-4' alt="" />
              
        </form>
    </div>
  )
}

export default RecuriterLogin