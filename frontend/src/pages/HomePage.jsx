import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import HowItWorks from '../components/HowItWorks'

const HomePage = () => {
  return (
    <>
        {/* <Navbar/> */}
        <HeroSection/>
        <FeatureSection/>
        <HowItWorks/>
    </>
  )
}

export default HomePage