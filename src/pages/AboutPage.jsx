import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../assets/images/cooltext488212725616103.png'
import AboutMyWork from '../assets/images/cooltext488212834955632.png'
import ContactMe from '../assets/images/cooltext488212887865807.png'
import AboutBox from '../components/AboutBox'

function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutBox frontImage={AboutMe} colorNum={1} />
      <AboutBox frontImage={AboutMyWork} colorNum={2} />
      <AboutBox frontImage={ContactMe} colorNum={1} />
    </>
  )
}

export default AboutPage
