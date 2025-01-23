import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AppContext } from '../Context/AppContext';
import Loading from '../Components/Loading.jsx';
import Navbar from '../Components/Navbar.jsx';
import { assets } from '../assets/assets.js';
import kConvert from 'k-convert';
import moment from 'moment';

const ApplyJob = () => {
  const {jobs}=useContext(AppContext);
  const {id}=useParams();
 
 
  
  const [jobData, setjobData] = useState();
  console.log(jobData);
  
   
  const fetchdata=async()=>{
    const data= await jobs.filter(job=>job._id===id);
    if(data){
      setjobData(data[0]);
    }
  }

  useEffect(()=>{
    if(jobs.length>0){
      fetchdata();
    }
  },[id,jobs])
  

  return  jobData ?(
    <>
    <Navbar/>

      <div className='2xl:px-20 min-h-screen flex flex-col py-10 px-4  mx-auto mt-11'>
        <div className='flex items-center justify-between bg-slate-200 py-3 px-20 rounded-md border-4 border-blue-600'>
          <div className='flex  items-center gap-3  p-14'>
            
          <img className='bg-white shadow h-32 rounded p-2' src={assets.company_icon} alt="" />
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-gray-700 lg:text-4xl'>{jobData.title}</h2>
            <div className='flex  items-center justify-between gap-7'>
              <span className='inline-flex items-center gap-1'>
                  <img className='h-4' src={assets.suitcase_icon} alt="" />
                  {jobData.companyId.name}
              </span>
              <span className='inline-flex items-center gap-1'>
                <img src={assets.location_icon} alt="" />
                {jobData.location}
              </span>
              <span className='inline-flex items-center gap-1'>
                <img src={assets.person_icon} alt="" />
                {jobData.level}
              </span>
              <span className='inline-flex items-center gap-1'>
                <img src={assets.money_icon} alt="" />
                ctc:{kConvert.convertTo(jobData.salary)}
              </span>
            </div>
            </div>
            
          </div>
          <div className='flex flex-col items-end'>
              <button className='bg-blue-600 px-8 py-3 rounded-md text-lg text-white '>Apply Now</button>
              <p className='text-gray-600 mt-1'>posted {moment(jobData.date).fromNow()}</p>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row mt-4'>
            <div className='w-full lg:w-2/3'>
              <h2 className='font-bold text-2xl mb-4'>Job description</h2>
              <div dangerouslySetInnerHTML={{__html:jobData.description}}></div>
              <button className='bg-blue-600 px-8 py-3 text-lg rounded-md text-white mt-10'>Apply Now</button>

            </div>
        </div>
      </div>
    </>
  ):(
    <Loading/>
    
  )
}

export default ApplyJob