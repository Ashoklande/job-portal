import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment/moment'

const Managejob = () => {
  return (
    <div className='mx-auto p-4 max-w-5xl '>
        <div>
          <table className='w-full min-w-full border max-sm:text-sm border-gray-300 '>
            
          <thead>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left '>#</th>
              <th className='px-4 py-2 text-left '>Job Title</th>
              <th className='px-4 py-2 text-left max-sm:hidden'>Date</th>
              <th className='px-4 py-2 text-left max-sm:hidden'>Location</th>
              <th className='px-4 py-2 text-left '>Applicants</th>
              <th className='px-4 py-2 text-left '>Visible</th>
            </tr>
          </thead>
            <tbody>
              {manageJobsData.map((job,idx)=>(
                <tr key={idx} className='border-b text-gray-700' >
                  <td className='px-4 py-2 text-center'>{idx+1}</td>
                  <td className='px-4 py-2 text-left'>{job.title}</td>
                  <td className='px-4 py-2 text-left'>{moment(job.date).format('LL')}</td>
                  <td className='px-4 py-2 text-left'>{job.location}</td>
                  <td className='px-4 py-2 text-center'>{job.applicants}</td>
                  <td className='px-4 py-2 text-center'><input checked className='scale-125' type="checkbox" /></td>
                </tr> 
                
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Managejob