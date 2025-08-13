import React from 'react'
import ProjectComponent from '../components/ProjectComponent'
import simonWeb from '../assets/images/icon.png'
import delivery from '../assets/images/delivery.png'
import swiftTalk from '../assets/images/swifttalk.png'

function MobileProjects() {
  const projects = [
    {
      id: 1,
      projectLogo: simonWeb,
      projectName: 'piassaDZ',
      to: '#',
    },
    {
      id: 2,
      projectLogo: swiftTalk,
      projectName: 'Swift Talk',
      to: '#',
    },
    {
      id: 3,
      projectLogo: delivery,
      projectName: 'RightOnTime',
      to: '#',
    },
    {
      id: 4,
      projectLogo: '',
      projectName: '',
      to: '#',
    },
    {
      id: 5,
      projectLogo: '',
      projectName: '',
      to: '#',
    },
    {
      id: 6,
      projectLogo: '',
      projectName: '',
      to: '#',
    },
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          flexWrap: 'wrap ',
          gap: '50px',
          padding: '50px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          height: '80%',
        }}
      >
        {projects.map((project, index) => (
          <ProjectComponent
            key={index}
            id={project.id}
            projectLogo={project.projectLogo}
            projectName={project.projectName}
            to={project.to}
          />
        ))}
      </div>
    </div>
  )
}

export default MobileProjects
