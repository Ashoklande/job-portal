import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext.jsx";

const Navbar = ({value}) => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate=useNavigate()
 
  const {setshowRecuriterLogin}=value;
  

  return (
    <div className="py-4 shadow">
      <div className="flex justify-between px-4 2xl:px-20 mx-auto items-center">
        <img className="cursor-pointer" onClick={()=>navigate('/')} src={assets.logo} alt="logo" />
        {user ? (
          <div className="flex gap-3"> 
            <Link to={'/Applications'}>Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hello,{user.firstName+" "+user.lastName}</p>
            <UserButton/>
          </div>
        ) : (
          <div className="flex gap-4 mx-sm:text-xs">
            <button onClick={()=>setshowRecuriterLogin(true)} className="text-gray-600">Recuritor Login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-500 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
            <div />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
