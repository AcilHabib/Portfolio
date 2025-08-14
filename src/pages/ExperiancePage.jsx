import React from 'react'
import SkillsSideBar from '../components/SkillsSideBar'
import ExperianceComponent from '../components/ExperianceComponent'

function ExperiancePage() {
  return (
    <div style={{ display: 'flex ', flexDirection: 'row', gap: '50px' }}>
      <SkillsSideBar />
      <ExperianceComponent />
    </div>
  )
}

export default ExperiancePage
