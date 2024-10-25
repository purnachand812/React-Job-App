import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'
import Viewalljobs from '../components/Viewalljobs'

const Homepage = () => {
  return (
    <>
    <Hero />
    <Homecards />
    <JobListings isHome={true} />
    <Viewalljobs /> 


    </>
  )
}

export default Homepage