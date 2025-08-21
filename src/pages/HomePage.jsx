import React, { useEffect, useState } from 'react'
import WelcomeMessage from '../components/WelcomeMessage'
import Assile from '../assets/images/Assil2.png'
import { motion } from 'framer-motion'
import VantaNet from '../components/VantaNet'

export default function HomePage() {
  const [isSmall, setIsSmall] = useState(() => {
    // initial check (guard for SSR)
    if (typeof window === 'undefined') return false
    return window.innerWidth <= 900
  })
  const [rotate, setRotate] = useState(false)

  useEffect(() => {
    function onResize() {
      setIsSmall(window.innerWidth <= 900)
    }
    // listen and also set initial in case size changed before effect
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // container grid style switches based on isSmall
  const containerStyle = {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: isSmall ? '1fr' : '1fr 1fr',
    gridAutoRows: '1fr',
    height: isSmall ? 'auto' : '100vh',
    overflow: 'hidden',
    backgroundColor: '#1e3a5c',
    opacity: 0.95,
    alignItems: 'start',
    gap: 0,
    padding: 0,
    boxSizing: 'border-box',
  }

  // wrapper for WelcomeMessage: top-left (desktop) or centered (mobile)
  const welcomeWrapperStyle = {
    zIndex: 1,
    alignSelf: 'start',
    justifySelf: isSmall ? 'center' : 'start',
    paddingLeft: isSmall ? '0' : '2rem',
    paddingTop: isSmall ? '1rem' : '0',
    boxSizing: 'border-box',
  }

  // hero image styles: bottom-right (desktop) or centered below (mobile)
  const heroImageStyle = {
    zIndex: 1,
    width: isSmall ? '360px' : 'min(45vw, 500px)',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    cursor: 'pointer',
    // placement inside grid cell
    justifySelf: isSmall ? 'center' : 'end',
    alignSelf: isSmall ? 'center' : 'end',
    // spacing depending on layout
    margin: isSmall ? '1.5rem 0 2.5rem' : '2rem',
  }

  return (
    <div style={containerStyle}>
      <VantaNet
        color={0x66ccff}
        backgroundColor={0x000}
        points={15}
        maxDistance={22}
        spacing={20}
      />

      <motion.div
        style={welcomeWrapperStyle}
        animate={{ y: isSmall ? 0 : -100 }}
        whileHover={{ scale: isSmall ? 1.01 : 1.03 }}
      >
        <WelcomeMessage isSmall={isSmall} />
      </motion.div>

      <motion.img
        src={Assile}
        alt="Assil"
        style={heroImageStyle}
        animate={{
          x: isSmall ? 200 : -100,
          y: isSmall ? -450 : -150,
          scale: 1,
          rotate: rotate ? 360 : 0,
        }}
        initial={{ scale: 0 }}
        whileHover={{ scale: isSmall ? 1.05 : 1.3 }}
        drag
        dragConstraints={{ left: 100, right: 100, top: 100, bottom: 100 }}
        onClick={() => setRotate(!rotate)}
      />
    </div>
  )
}
