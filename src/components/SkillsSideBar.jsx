import React from 'react'
import { motion } from 'framer-motion'

function SkillsSideBar() {
  return (
    <motion.div
      style={{
        width: '40vh',
        height: '85vh',
        border: '1px solid transparent',
        borderRadius: 10,
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
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            JavaScript
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            React
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            Node.js
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            CSS
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            HTML
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            Next.js
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            TailWind
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            ReactNative
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            Git
          </p>
        </li>
        <li style={{ margin: '10px 0' }}>
          <p style={{ fontSize: 20, fontFamily: 'Poppins', color: 'white' }}>
            GitHub
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default SkillsSideBar
