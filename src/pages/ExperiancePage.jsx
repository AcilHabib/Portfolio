import React from 'react'
import SkillsSideBar from '../components/SkillsSideBar'
import ExperianceComponent from '../components/ExperianceComponent'

function ExperiancePage() {
  return (
    <div
      style={{
        display: 'flex ',
        flexDirection: 'row',
        gap: '50px',
        overflow: 'hidden',
        backgroundColor: '#1e3a5c',
      }}
    >
      <SkillsSideBar />
      <ExperianceComponent />
    </div>
  )
}

export default ExperiancePage
