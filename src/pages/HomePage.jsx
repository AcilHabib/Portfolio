import React, { useState } from 'react'
import WelcomeMessage from '../components/WelcomeMessage'
import Assile from '../assets/images/Assil2.png'
import { motion } from 'framer-motion'
import VantaNet from '../components/VantaNet'

export default function HomePage() {
  const [rotate, setRotate] = useState(false)

  return (
    <div
      style={{
        position: 'relative', // positioning context
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#1e3a5c',
        opacity: 0.95,
      }}
    >
      <VantaNet
        color={0x66ccff}
        backgroundColor={0x000}
        points={15}
        maxDistance={22}
        spacing={20}
      />

      <motion.div
        animate={{ y: -100 }}
        whileHover={{ scale: 1.3 }}
        style={{ cursor: 'pointer', zIndex: 1 }}
      >
        <WelcomeMessage />
      </motion.div>

      <motion.img
        src={Assile}
        width={500}
        style={{ alignSelf: 'flex-end', cursor: 'pointer', zIndex: 1 }}
        animate={{ x: -100, y: -150, scale: 1, rotate: rotate ? 360 : 0 }}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.3 }}
        drag
        dragConstraints={{ left: 100, right: 100, top: 100, bottom: 100 }}
        onClick={() => setRotate(!rotate)}
      />
    </div>
  )
}
