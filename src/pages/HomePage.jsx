import React, { useState } from 'react'
import WelcomeMessage from '../components/WelcomeMessage'
import Assile from '../assets/images/Assil2.png'
import { motion } from 'framer-motion'

function HomePage() {
  const [rotate, setRotate] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100vh',
        backgroundColor: '#1e3a5c',
        overflow: 'clip',
      }}
    >
      <motion.div
        animate={{ y: -100 }}
        whileHover={{ scale: 1.3 }}
        style={{ cursor: 'pointer' }}
      >
        <WelcomeMessage />
      </motion.div>
      <motion.img
        src={Assile}
        width={500}
        style={{
          alignSelf: 'flex-end',
          cursor: 'pointer',
          /* zIndex: -3, */
        }}
        animate={{ x: -100, y: -150, scale: 1, rotate: rotate ? 360 : 0 }}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.3 }}
        drag
        dragConstraints={{ left: 100, right: 100, top: 100, bottom: 100 }}
        onClick={() => {
          setRotate(!rotate)
        }}
      />
    </div>
  )
}

export default HomePage
