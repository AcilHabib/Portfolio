import { rgba } from 'framer-motion'
import React, { useContext, useState } from 'react'
import AboutMe from '../assets/images/cooltext488212725616103.png'
import HoveredContent from './HoveredContent'
import { aboutContext } from '../contexts/AboutContext'

function AboutBox({
  id,
  frontImage,
  colorNum,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const { setId } = useContext(aboutContext)

  return (
    <div
      style={{
        width: !isHovered ? '40vh' : '75vh',
        height: !isHovered ? '40vh' : '75vh',
        border: '2px solid transparent',
        borderImage:
          colorNum == 1
            ? 'linear-gradient(to bottom right, #0066ff 0%, rgba(255,105,180,0) 100%) 1'
            : 'linear-gradient(to bottom right, #ff69b4 0%, rgba(255,105,180,0) 100%) 1',
        backgroundColor: 'rgba(216, 215, 215, 0.16)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBottom: marginBottom,
        cursor: 'pointer',
        boxShadow: '0 8px 18px rgba(0,0,0,0.18), 0 22px 50px rgba(0,0,0,0.12)',
      }}
      onMouseEnter={() => [setIsHovered(true), setId(id)]}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <img
          src={frontImage}
          style={{
            width: '87%',
            height: '30%',
          }}
        />
      ) : (
        <HoveredContent />
      )}
    </div>
  )
}

export default AboutBox
