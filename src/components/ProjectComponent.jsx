import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProjectComponent({ id, projectLogo, projectName, to }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <motion.div
        style={{
          width: '30vh',
          height: '30vh',
          border: '2px solid transparent',
          borderImage:
            id % 2 === 0
              ? 'linear-gradient(to bottom right, #0066ff 0%, rgba(255,105,180,0) 100%) 1'
              : 'linear-gradient(to bottom right, #ff69b4 0%, rgba(255,105,180,0) 100%) 1',
          backgroundColor: 'rgba(216, 215, 215, 0.16)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          flexDirection: 'column',
          boxShadow:
            '0 8px 18px rgba(0,0,0,0.18), 0 22px 50px rgba(0,0,0,0.12)',
        }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.2 }}
      >
        <img src={projectLogo} width="40%" style={{ marginTop: '30px' }} />
        <p
          style={{
            fontFamily: 'Chewy ',
            fontSize: 40,
            fontWeight: 150,
            fontStyle: 'normal',
          }}
        >
          {projectName}
        </p>
      </motion.div>
    </Link>
  )
}

export default ProjectComponent
