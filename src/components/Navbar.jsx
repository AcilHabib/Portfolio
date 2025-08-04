import React, { useState } from 'react'
import mainLogo from '../assets/images/HomeLogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState('')

  const getLinkStyle = (name) => ({
    textDecoration: 'none',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    color: hoveredLink === name ? '#ffffff' : '#0066ff',
    backgroundColor: hoveredLink === name ? '#0066ff' : 'transparent',
    borderRadius: '20px',
    padding: '10px 20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  })

  return (
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
      }}
    >
      <Link to="/">
        <img
          src={mainLogo}
          alt="Home link"
          height={80}
          style={{ objectFit: 'contain' }}
        />
      </Link>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '40px',
          margin: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={getLinkStyle('Home')}
            onMouseEnter={() => setHoveredLink('Home')}
            onMouseLeave={() => setHoveredLink('')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={getLinkStyle('About')}
            onMouseEnter={() => setHoveredLink('About')}
            onMouseLeave={() => setHoveredLink('')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={getLinkStyle('Projects')}
            onMouseEnter={() => setHoveredLink('Projects')}
            onMouseLeave={() => setHoveredLink('')}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            style={getLinkStyle('Experience')}
            onMouseEnter={() => setHoveredLink('Experience')}
            onMouseLeave={() => setHoveredLink('')}
          >
            Experience
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
