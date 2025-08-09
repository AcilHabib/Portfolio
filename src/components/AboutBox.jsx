import { rgba } from 'framer-motion'
import React, { useState } from 'react'
import AboutMe from '../assets/images/cooltext488212725616103.png'

function AboutBox({ frontImage, colorNum }) {
  return (
    <div
      style={{
        width: 250,
        height: 250,
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
        margin: '20px',
        alig,
      }}
    >
      <img
        src={frontImage}
        style={{
          width: '87%',
          height: '30%',
        }}
      />
    </div>
  )
}

export default AboutBox
