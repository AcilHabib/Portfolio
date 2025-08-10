import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../assets/images/cooltext488212725616103.png'
import AboutMyWork from '../assets/images/cooltext488212834955632.png'
import ContactMe from '../assets/images/cooltext488212887865807.png'
import AboutBox from '../components/AboutBox'
import MovingBoxes from '../components/MovingBoxes'

function AboutPage() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AboutBox
          id={1}
          frontImage={AboutMe}
          colorNum={1}
          marginRight={0}
          marginLeft={300}
          marginBottom={-100}
        />
        <div style={{ alignSelf: 'flex-end' }}>
          <AboutBox
            id={2}
            frontImage={AboutMyWork}
            colorNum={2}
            marginRight={200}
            marginLeft={0}
            margintop={-90}
            marginBottom={-100}
          />
        </div>
        <AboutBox
          id={3}
          frontImage={ContactMe}
          colorNum={1}
          marginRight={0}
          marginLeft={280}
          s
        />
      </div>
    </>
  )
}

export default AboutPage
