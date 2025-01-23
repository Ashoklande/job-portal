import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const Addjob = () => {
  const [title, settitle] = useState("");
  const [location, setlocation] = useState("Bangalore");
  const [category, setcategory] = useState("Programming");
  const [level, setlevel] = useState("Beginner Level");
  const [salary, setsalary] = useState(0);

  const editRef = useRef(null);
  const quillRef = useRef(null);
  

  useEffect(() => {
    if (!quillRef.current && editRef.current) {
      quillRef.current = new Quill(editRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form className="container p-4 flex flex-col items-start gap-3 w-full ">
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Type here"
          className="w-full max-w-lg px-3 py-2 border-2 border-gray-500 rounded-md"
        />
      </div>

      <div className="w-full max-w-lg">
        <p className="my-2">Job Description</p>
        <div ref={editRef}></div>
      </div>

      <div className="flex flex-col  max-w-lg sm:flex-row gap-2 w-full sm:gap-8 ">
        <div>
          <p className="mb-2">Select Category</p>
           <select  className="px-3 py-2 border-2 w-full border-gray-300 rounded" onChange={e=>setcategory(e.target.value)}>
            {JobCategories.map((category,idx)=>(
              <option key={idx} value={category}>{category}</option>
            ))}
           </select>
        </div>
         
         <div>
          <p className="mb-2">Job Location</p>
          <select className="px-3 py-2 border-2 w-full border-gray-300 rounded" onChange={e=>setlocation(e.target.value)}>
            {JobLocations.map((location,idx)=>(
              <option key={idx} value={location}>{location}</option>
            ))}
          </select>
         </div>

         <div>
          <p className="mb-2">Job Level</p>
          <select className="px-3 py-2 border-2 w-full border-gray-300 rounded" onChange={e=>setlevel(e.target.value)}>
           <option value="Beginner Level">Beginner Level</option>
           <option value="Intermediate level">Intermediate level</option>
           <option value="Senior Level">senior Level</option>
          </select>
         </div>
      </div>

      <div className=" ">
        <p className="mb-2">Job Salary</p>
        <input min={0} className="px-3 sm:w-[120px]  w-full py-2 border-2 border-gray-300 rounded" onChange={e=>setsalary(e.target.value)} type="Number" placeholder="0" />
      </div>
      <button className="mt-4 bg-black text-white w-28 rounded px-4 py-2">ADD</button>
    </form>
  );
};

export default Addjob;
