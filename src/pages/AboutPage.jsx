import React from 'react'
import AboutBox from '../components/AboutBox'
import VantaNet from '../components/VantaNet'
import SkillsSideBar from '../components/SkillsSideBar'
import ExperianceComponent from '../components/ExperianceComponent'

function AboutPage() {
  return (
    <div
      style={{
        display: 'flex ',
        flexDirection: 'row',
        gap: '50px',
        overflow: 'hidden',
      }}
    >
      <VantaNet
        color={0x66ccff}
        backgroundColor={0x1e3a5c}
        points={15}
        maxDistance={22}
        spacing={20}
      />

      <div
        style={{
          display: 'flex ',
          flexDirection: 'row',
          gap: '50px',
          overflow: 'hidden',
          marginTop: '11vh',
        }}
      >
        <SkillsSideBar />
        <ExperianceComponent />
      </div>
    </div>
  )
}

export default AboutPage
