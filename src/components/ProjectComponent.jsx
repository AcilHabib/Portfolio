import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProjectComponent({
  id,
  projectLogo,
  projectName,
  projectDescription,
  to,
}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{ textDecoration: 'none', color: 'inherit', marginTop: '1vh' }}
    >
      <motion.div
        style={{
          width: '40vh',
          height: '40vh',
          border: '2px solid transparent',
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
          borderRadius: 10,
        }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.2 }}
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        {!isHovered ? (
          <img src={projectLogo} style={{ width: '40%', marginTop: '30px' }} />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontSize: 30,
                fontFamily: 'Poppins',
                color: 'white',
                alignSelf: 'center',
              }}
            >
              {projectName}
            </p>
            <p
              style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                color: 'white ',
                padding: '0 20px',
              }}
            >
              {projectDescription}
            </p>
          </div>
        )}
      </motion.div>
    </Link>
  )
}

export default ProjectComponent
