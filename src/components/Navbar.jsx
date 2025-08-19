import React, { useState } from 'react'
import mainLogo from '../assets/images/HomeLogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState('')

  const getLinkStyle = (name) => ({
    textDecoration: 'none',
    fontFamily: 'poppins',
    fontWeight: 500,
    color: hoveredLink === name ? '#ffffff' : '#0066ff',
    backgroundColor: hoveredLink === name ? '#FF66CC' : 'transparent',
    fontSize: 30,
    borderRadius: '20px',
    padding: '5px 10px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  })

  return (
    <div
      style={{
        backgroundColor: '#162c44ff',
        maxHeight: '10vh',
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
          height={200}
          style={{
            objectFit: 'contain',
            marginLeft: '-20px',
          }}
        />
      </Link>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '100px',
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
            to="/gallery"
            style={getLinkStyle('Gallery')}
            onMouseEnter={() => setHoveredLink('Gallery')}
            onMouseLeave={() => setHoveredLink('')}
          >
            Gallery
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
