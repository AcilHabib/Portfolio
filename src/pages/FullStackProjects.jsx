import React from 'react'
import ProjectComponent from '../components/ProjectComponent'
import shopsCraftLogo from '../assets/images/shopify.png'
import piassa from '../assets/images/piassa.png'
import simonWeb from '../assets/images/simonicon.png'
import badaro from '../assets/images/shopping.png'
import meraco from '../assets/images/meraco.png'
import shadow from '../assets/images/shadow.png'
import VantaNet from '../components/VantaNet'
function FullStackProjects() {
  const projects = [
    {
      id: 1,
      projectLogo: shopsCraftLogo,
      projectName: 'ShopsCraft',
      projectDescription:
        '3 unique themes for flexible design,CDN integration for speed,Scalable platform with smooth UX',
      to: '#',
    },
    {
      id: 2,
      projectLogo: badaro,
      projectName: 'Badaro-ns',
      projectDescription:
        'Minimal and clean design,Focus on speed and clarity,Perfect for tech products ',
      to: '#',
    },
    {
      id: 3,
      projectLogo: meraco,
      projectName: 'Meraco',
      projectDescription:
        'Structured and timeless look,Easy navigation style,Great for fashion or retail',
      to: '#',
    },
    {
      id: 4,
      projectLogo: shadow,
      projectName: 'Shadow',
      projectDescription:
        'Bold and vibrant visuals,Dynamic layout choices,Ideal for lifestyle brands',
      to: '#',
    },
    {
      id: 5,
      projectLogo: simonWeb,
      projectName: 'SimonWeb',
      projectDescription:
        'Wide range of car parts from engine to body,Fast delivery with reliable logistics,Solutions for insurance companies to streamline claims',
      to: '#',
    },
    {
      id: 6,
      projectLogo: piassa,
      projectName: 'PiassaExpert',
      projectDescription:
        'Professional dashboard for managing parts and claims,Integrated tools to match repair needs with parts,Seamless collaboration with insurers for faster resolutions',
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
        overflow: 'clip',

        backgroundColor: 'rgba(30, 58, 92, 0.65)',
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
            projectDescription={project.projectDescription}
            to={project.to}
          />
        ))}
      </div>
    </div>
  )
}

export default FullStackProjects
