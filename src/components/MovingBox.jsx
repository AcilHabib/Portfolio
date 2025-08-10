import React from 'react'
import { motion } from 'framer-motion'

function MovingBox({ color, top, right, left, bottom, size = 200 }) {
  return (
    <motion.div
      style={{
        width: '200px',
        height: '200px',
        borderRadius: 10,
        backgroundColor: color,
        opacity: 0.6,
        position: 'absolute',
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        zIndex: -300,
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{ repeat: Infinity, duration: 6 }}
    />
  )
}

export default MovingBox
