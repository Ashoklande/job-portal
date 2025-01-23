import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import JobListing from '../Components/JobListing'
import Footer from '../Components/Footer'
import AppDownload from '../Components/AppDownload'

const Home = ({value}) => {
  return (
    <div>
        <Navbar value={value}/>
        <Hero/>
        <JobListing/>
        <AppDownload/>
        <Footer/>
    </div>
  )
}

export default Home