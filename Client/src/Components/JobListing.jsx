import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { assets, JobCategories, JobLocations, jobsData } from "../assets/assets.js";
import JobCard from "./JobCard.jsx";

const JobListing = () => {
  const { isSearched, searchFilter, setsearchFilter,jobs } = useContext(AppContext);
  const [showFilter, setshowFilter] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [selectedCategory, setselectedCategory] = useState([])
  const [selectedLocation, setselectedLocation] = useState([]);  

  const [filterJobs, setfilterJobs] = useState(jobs);

 const onChangeCategory=(category)=>{
   setselectedCategory(
    prev=>prev.includes(category)?prev.filter(c=> c!==category):[...prev,category]
   )
  }

  const onChangeLocation=(location)=>{
    setselectedLocation(
     prev=>prev.includes(location)?prev.filter(l=> l!==location):[...prev,location]
    )
   }

   useEffect(()=>{
     const matchesCategory=job=>selectedCategory.length===0||selectedCategory.includes(job.category)

     const matchesLocation=job=>selectedLocation.length===0 || selectedLocation.includes(job.location)

     const matchesTitle=job=>searchFilter.title==='' || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
     
     const matchesfilterLOcation=job=>searchFilter.location==='' || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
  
     const newFilterData=jobs.slice().reverse().filter(
      jobs=>matchesCategory(jobs) && matchesLocation(jobs) && matchesTitle(jobs) && matchesfilterLOcation(jobs)
     )
     setfilterJobs(newFilterData);
     setcurrentPage(1)
     

    },[jobs,selectedCategory,selectedLocation,searchFilter]);
   

  return (
    <div className="2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      <div className="w-full lg:w-1/4 bg-white px-4 ">
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className=" font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-400">
                {searchFilter.title !== "" && (
                  <span className="inline-flex gap-2.5 p-2 items-center bg-blue-50 border border-blue-2 rounded">
                    {searchFilter.title}
                    <img
                      onClick={(e) =>
                        setsearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="cross"
                    />
                  </span>
                )}
                {searchFilter.location !== "" && (
                  <span className="inline-flex gap-2.5 items-center ml-2 p-2 bg-red-50 border border-red-2 rounded">
                    {searchFilter.location}
                    <img
                      onClick={(e) =>
                        setsearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="cross"
                    />
                  </span>
                )}{" "}
              </div>
            </>
          )}

         <button onClick={e=>setshowFilter(prev=>!prev)} className="bg-slate-50 shadow px-4 py-2 lg:hidden border-2 border-blue-800">{showFilter?'close':'ShowFilter'}</button>
          {/* category filter */}

          <div className={showFilter?'':'max-lg:hidden'}>
            <h4 className="font-medium text-lg py-4">Search by Categories</h4>
            <ul className="space-y-4 text-gray-600">
                {JobCategories.map((category,idx)=>(
                    <li key={idx} className="flex gap-3 items-center">
                      <input
                      checked={selectedCategory.includes(category)}
                      onChange={()=>onChangeCategory(category)}
                       className="scale-125"
                        type="checkbox" />
                    {category}</li>
                ))}
            </ul>
          </div>

          {/* location filter */}

          <div className={showFilter?'':'max-lg:hidden'}>
            <h4 className="font-medium text-lg pt-20 py-4">Search by Location</h4>
            <ul className="space-y-4 text-gray-600">
                {JobLocations.map((location ,idx)=>(
                    <li key={idx} className="flex gap-3 items-center">
                      <input 
                      onChange={()=>onChangeLocation(location)}
                      checked={selectedLocation.includes(location)}

                      className="scale-125" type="checkbox" />
                    {location}</li>
                ))}
            </ul>
          </div>
      </div>


      {/* job listings */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 id="list-page" className="font-medium text-3xl py-2  ">Latests jobs</h3>
        <p className="mb-8">Get Your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filterJobs.slice((currentPage-1)*6,currentPage*6).map((job,idx)=>(
                    <JobCard key={idx} job={job}/>
                ))}
        </div>
        
        {/* page */}

        {
          <div className="flex items-center justify-center mt-10 space-x-3">
            <a href="#list-page">
              <img onClick={()=>setcurrentPage(Math.max(currentPage-1),1)} src={assets.left_arrow_icon} alt="arr" />
            </a>

           { Array.from({length:Math.ceil(filterJobs.length)/6}).map((_,idx)=>(
              <a href="#list-page">
                <button onClick={()=>setcurrentPage(idx+1)} className={` w-10 h-10flex items-center justify-center border-2 border-gray-300 rounded ${currentPage===idx+1?'bg-blue-100 text-blue-500':'text-gray-500'}`}>{idx+1}</button>
              </a>
             ))}

              <a href="#list-page">
              <img onClick={()=>setcurrentPage(Math.min(currentPage+1,Math.ceil(filterJobs.length/6)))}  src={assets.right_arrow_icon} alt="arr" />
            </a>
          </div>
             
           
        }
      </section>
    </div>
  );
};

export default JobListing;
