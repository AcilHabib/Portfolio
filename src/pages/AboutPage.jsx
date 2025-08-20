import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../assets/images/cooltext488212725616103.png'
import AboutMyWork from '../assets/images/cooltext488212834955632.png'
import ContactMe from '../assets/images/cooltext488212887865807.png'
import AboutBox from '../components/AboutBox'
function AboutPage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1e3a5c',
        }}
      >
        <AboutBox
          id={1}
          frontText={'About Me  '}
          colorNum={1}
          marginRight={0}
          marginLeft={300}
          marginBottom={-100}
        />
        <div style={{ alignSelf: 'flex-end' }}>
          <AboutBox
            id={2}
            frontText={'About My Work'}
            colorNum={2}
            marginRight={200}
            marginLeft={0}
            margintop={-90}
            marginBottom={-100}
          />
        </div>
        <AboutBox
          id={3}
          frontText={'Contact Me'}
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
