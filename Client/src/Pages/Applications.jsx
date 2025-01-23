
import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'

export const Applications = () => {

  const [isEdit, setisEdit] = useState(false)
  const [resume, setResume] = useState(null)
  return (
    <>
      <Navbar/>
      <div className='container px-4 min-h-[64vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold'>Your Resume</h2>
          <div className=' flex gap-2 mb-6 mt-3 '>
            {
                isEdit? 
                <>
                  <label className='flex items-center' htmlFor="resumeupload">
                    <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 '>select resume</p>
                    <input onChange={e=>setResume(e.target.files[0])} hidden accept="application/pdf" id='resumeupload' type="file" />
                    <img src={assets.profile_upload_icon} alt="" />
                  </label>
                  <button onClick={()=>setisEdit(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2 '>save</button>
                </>:
                <div className='flex gap-2'>
                    <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg' href="">
                      Resume
                    </a>
                    <button onClick={()=>setisEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
                </div>
            }
          </div>

          <div>
            <h2 className='text-xl font-semibold mb-4'>Applied Jobs </h2>
            <table className='min-w-full bg-white border rounded-lg '>
              <thead>
                <th className='py-3 px-4 border-b text-left'>Company</th>
                <th className='py-3 px-4 border-b text-left'>Job title</th>
                <th className='py-3 px-4 border-b text-left max-sm:hidden'>Location</th>
                <th className='py-3 px-4 border-b text-left max-sm:hidden'>Date</th>
                <th className='py-3 px-4 border-b text-left'>Status</th>
              </thead>

              <tbody>
                {jobsApplied.map((job,idx)=>true?(
                    <tr>
                      <td className='py-3  flex items-center gap-2 px-4 border-b ' >
                        <img src={job.logo} alt="" />
                        {job.company}
                      </td>
                      <td className='py-2 px-4 border-b '>{job.title}</td>
                      <td className='py-2 px-4 border-b  max-sm:hidden'>{job.location}</td>
                      <td className='py-2 px-4 border-b  max-sm:hidden'>{moment(job.date).fromNow()}</td>
                      <td className='py-2 px-4 border-b' >
                        <span className={` ${job.status==="Rejected"?' bg-red-100':job.status==="Accepted"?' bg-green-100 ':'bg-blue-100'} px-4 py-1.5 rounded `}>{job.status}</span>
                      </td>
                    </tr>
                ):(null))}
              </tbody>
            </table>
          </div>
      </div>
    </>
  )
}
