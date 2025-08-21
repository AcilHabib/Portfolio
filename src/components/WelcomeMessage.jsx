import React from 'react'
import Navbar from './Navbar'
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import { clamp } from 'three/src/math/MathUtils.js'

function WelcomeMessage({ isSmall }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
        padding: isSmall ? '1.25rem' : '2rem',
        width: isSmall ? 'min(92vw, 700px)' : 'min(90vw, 700px)',
        margin: isSmall ? '0 auto' : '0', // center on small screens
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontFamily: 'Poppins ',
          fontWeight: 400,
          fontSize: 'clamp(48px, 12vw, 130px)',
          color: '#0066ff',
          textShadow: ' 3px 3px 5px rgba(0, 0, 0, 0.5)',
          marginBottom: '-50px',
          marginTop: '230px',
        }}
      >
        Hi,
      </h1>
      <div
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <li
          style={{
            paddingTop: '75px',
            paddingRight: '10px',
            paddingLeft: '-100px',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(16px, 2.5vw, 30px)',

              fontFamily: 'poppins',
              color: 'white',
              fontWeight: 300,
            }}
          >
            I am{' '}
          </h3>
        </li>
        <li>
          <h1
            style={{
              fontFamily: 'poppins',
              fontWeight: 400,
              fontSize: 'clamp(36px, 6vw, 80px)',
              color: '#66b2ff',
              textShadow: ' 1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            Assil Habib
          </h1>
        </li>
      </div>
      <h2
        style={{
          fontSize: 'clamp(16px, 2.2vw, 30px)',
          fontFamily: 'poppins',
          color: 'white ',
          fontWeight: 300,
          marginTop: '-20px',
        }}
      >
        and I make Beautiful Websites !
      </h2>
    </div>
  )
}

export default WelcomeMessage
