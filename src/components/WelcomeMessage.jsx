import React from 'react'
import Navbar from './Navbar'
import { faDirections } from '@fortawesome/free-solid-svg-icons'

function WelcomeMessage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
        padding: '20px',
        width: '700px',
        marginLeft: '100px',
      }}
    >
      <h1
        style={{
          fontFamily: 'Poppins ',
          fontWeight: 400,
          fontSize: '130px',
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
              fontSize: '30px',
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
              fontSize: '80px',
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
          fontSize: '30px',
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
