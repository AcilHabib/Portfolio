import React from 'react'
import { useState, useContext } from 'react'
import { aboutContext } from '../contexts/AboutContext'
import { motion } from 'framer-motion'
import FieldAnimation from './WebAnimation'
import { Polygon } from 'react-leaflet'

function Field({
  id,
  logo,
  colorNum,
  message,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const { setId } = useContext(aboutContext)
  return (
    <motion.div
      style={{
        width: '50vw',
        height: '90vh',
        clipPath:
          colorNum == 1
            ? 'polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)'
            : 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderImage:
          colorNum == 1
            ? 'linear-gradient(to bottom right, #0c6ff9ff 0%, rgba(255,105,180,0) 100%) 1'
            : 'linear-gradient(to bottom right, #66b2ffff 0%, rgba(255,105,180,0) 100%) 1',
        border: '2px solid  ',
        backgroundColor: 'rgba(216, 215, 215, 0.16)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: '21%',
        marginBottom: marginBottom,
        cursor: 'pointer',
        flexDirection: 'column',
        boxShadow: '0 8px 18px rgba(0,0,0,0.18), 0 22px 50px rgba(0,0,0,0.12)',
      }}
      onMouseEnter={() => [setIsHovered(true), setId(id)]}
      onMouseLeave={() => setIsHovered(false)}
      animate={id == 1 ? { x: 130 } : { x: -130 }}
    >
      <FieldAnimation logo={logo} />
      <h1
        style={{
          fontFamily: 'Poppins',
          color: colorNum == 1 ? '#086cf7ff' : '#66b2ffff',
        }}
      >
        {message}
      </h1>
    </motion.div>
  )
}

export default Field
