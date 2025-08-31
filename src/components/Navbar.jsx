import React, { useState } from 'react'
import mainLogo from '../assets/images/habibLogo.png'
import { Link } from 'react-router-dom'
import myResume from '../assets/Resumé.pdf'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState('')

  const getLinkStyle = (name) => ({
    textDecoration: 'none',
    fontFamily: 'poppins',
    fontWeight: 500,
    color: hoveredLink === name ? '#ffffff' : '#66b2ff',
    fontSize: 24,
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
        width: '95vw',
        maxHeight: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
        position: 'absolute',
        zIndex: 1,
        overflow: 'clip',
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
            marginTop: '10px',
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
          <a
            href={myResume}
            style={getLinkStyle('Experience')}
            onMouseEnter={() => setHoveredLink('Experience')}
            onMouseLeave={() => setHoveredLink('')}
            download={'Resumé.pdf'}
          >
            Resumé
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
