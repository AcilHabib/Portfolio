import React, { useState } from 'react'
import WelcomeMessage from '../components/WelcomeMessage'
import Assile from '../assets/images/Assil2.png'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

function HomePage() {
  const [rotate, setRotate] = useState(false)

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          maxHeight: '88vh',
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
          width={600}
          style={{
            paddingTop: '100px',
            alignSelf: 'flex-end',
            cursor: 'pointer',
          }}
          animate={{ x: -100, y: 100, scale: 1, rotate: rotate ? 360 : 0 }}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.3 }}
          drag
          dragConstraints={{ left: 100, right: 100, top: 100, bottom: 100 }}
          onClick={() => {
            setRotate(!rotate)
          }}
        />
      </div>
    </>
  )
}

export default HomePage
