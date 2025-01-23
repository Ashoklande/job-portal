import React, { createContext, useEffect, useState } from 'react'
import { jobsData } from '../assets/assets.js';


export const AppContext=createContext();

const AppContextProvider = (props) => {

    const [searchFilter, setsearchFilter] = useState({
        title:'',
        location:''
    });

    const [isSearched, setisSearched] = useState(false);
    const [jobs, setjobs] = useState([]);

    const getjobs=async()=>{
       setjobs(jobsData);
    }
    
    useEffect(()=>{
      getjobs();
    },[])


    const value={
        searchFilter,setsearchFilter,
        isSearched,setisSearched,
        jobs,
    }

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider