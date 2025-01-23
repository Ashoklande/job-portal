import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ApplyJob from "./Pages/ApplyJob";
import { Applications } from "./Pages/Applications";
import AppContextProvider from "./Context/AppContext";
import RecuriterLogin from "./Pages/RecuriterLogin";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import ViewApplications from "./Pages/ViewApplications";
import Addjob from './Pages/Addjob'
import Managejob from "./Pages/Managejob";
import 'quill/dist/quill.snow.css';


const App = () => {
 
 
  const [showRecuriterLogin, setshowRecuriterLogin] = useState(false)

  const value={showRecuriterLogin,setshowRecuriterLogin}
  
  return (
    <AppContextProvider>
     {showRecuriterLogin &&  <RecuriterLogin value={value}/>}
      <Routes>
        <Route path="/" element={<Home value={value} />} />
        <Route path="/Apply-job/:id" element={<ApplyJob  />}></Route>
        <Route path="/Applications" element={<Applications />}></Route>
        
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="viewApplications" element={<ViewApplications/>}/>
        <Route path="managejob" element={<Managejob/>}/>
        <Route path="addjob" element={<Addjob/>}/>
        </Route>
    
      </Routes>
    </AppContextProvider>
  );
};

export default App;
