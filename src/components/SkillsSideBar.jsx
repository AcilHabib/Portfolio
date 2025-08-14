import React from 'react'
import { motion } from 'framer-motion'

function SkillsSideBar() {
  return (
    <motion.div
      style={{
        width: '40vh',
        height: '85vh',
        border: '2px solid transparent',
        borderImage:
          'linear-gradient(to bottom right, #ff69b4 0%, rgba(255,105,180,0) 100%) 1',
        backgroundColor: 'rgba(216, 215, 215, 0.16)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        flexDirection: 'column',
        boxShadow: '0 8px 18px rgba(0,0,0,0.18), 0 22px 50px rgba(0,0,0,0.12)',
        marginLeft: '20px',
      }}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
    >
      <h2
        style={{
          color: '#0066ff',
          marginBottom: '20px',
          marginTop: '30px',
          fontFamily: 'Poppins',
          fontSize: 40,
        }}
      >
        Skills
      </h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>JavaScript</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>React</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>Node.js</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>CSS</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>HTML</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>Next.js</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>TailWind</p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>ReactNative</p>
        </li>
      </ul>
    </motion.div>
  )
}

export default SkillsSideBar
