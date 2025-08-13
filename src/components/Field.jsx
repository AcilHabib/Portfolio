import React from 'react'
import { useState, useContext } from 'react'
import { aboutContext } from '../contexts/AboutContext'
import { motion } from 'framer-motion'
import FieldAnimation from './WebAnimation'

function Field({
  id,
  logo,
  colorNum,
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
        width: !isHovered ? '50vh' : '60vh',
        height: !isHovered ? '50vh' : '60vh',
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
        flexDirection: 'column',
        boxShadow: '0 8px 18px rgba(0,0,0,0.18), 0 22px 50px rgba(0,0,0,0.12)',
      }}
      onMouseEnter={() => [setIsHovered(true), setId(id)]}
      onMouseLeave={() => setIsHovered(false)}
      animate={id == 1 ? { x: 300 } : { x: -300 }}
    >
      <FieldAnimation logo={logo} />
    </motion.div>
  )
}

export default Field
