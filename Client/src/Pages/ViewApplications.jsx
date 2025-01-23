import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className='p-4 mx-auto '>
       <div>
        <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left'>#</th>
              <th className='px-4 py-2 text-left'>User name</th>
              <th className='px-4 py-2 text-left '>Job Title</th>
              <th className='px-4 py-2 text-left max-sm:hidden'>Location</th>
              <th className='px-4 py-2 text-left max-sm:hidden'>Resume</th>
              <th className='px-4 py-2 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant,idx)=>(
              <tr key={idx} className='border-b'>
                <td className='px-4 py-2 text-center'>{idx+1}</td>
                <td className='flex items-center px-4 py-2 '>
                  <img className='h-10 w-10 max-sm:hidden' src={applicant.imgSrc} alt="" />
                  <span>{applicant.name}</span>
                </td>
                <td className='px-4 py-2 max-sm:hidden'>{applicant.jobTitle}</td>
                <td className='px-4 py-2 max-sm:hidden'>{applicant.location}</td>
                <td className='px-4 py-2 '><a className='bg-blue-50 inline-flex gap-2 items-center text-blue-400 px-3 py-1 rounded' href="" target='_blank'>
                  Resume <img src={assets.resume_download_icon} alt="" /></a>
                </td>
                <td className='px-4 py-2 relative'>
                  <div className='relative group text-left inline-block'>
                    <button className='text-gray-500 action-button'>...</button> 
                    <div className='z-10 group-hover:block hidden absolute md:left-0 top-0 w-32 mt-3 border-gray-200 right-0 shadow rounded bg-white border'>
                      <button className='block text-blue-500 px-4 py-2 w-full text-left hover:bg-gray-100'>Accept</button>
                      <button className='block text-red-500 px-4 py-2 w-full text-left hover:bg-gray-100'>Reject</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>

    </div>
  )
}

export default ViewApplications