import React from 'react'
import nelia from '../assets/images/flutter.png'
import piassa from '../assets/images/icon.png'
import winstonRed from '../assets/images/winstonred_logo.jpeg'
import { motion } from 'framer-motion'

function ExperianceComponent() {
  return (
    <motion.div
      style={{
        width: '70%',
        height: '85vh',
        border: '2px solid transparent',
        borderImage:
          'linear-gradient(to bottom right, #0066ff 0%, rgba(255,105,180,0) 100%) 1',
        backgroundColor: 'rgba(216, 215, 215, 0.16)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        boxShadow: '0 8px 18px rgba(0,0,0,0.18), 0 22px 50px rgba(0,0,0,0.12)',
      }}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
    >
      {' '}
      <h2
        style={{
          color: '#0066ff',
          marginTop: '30px',
          marginBottom: '30px',
          fontFamily: 'Poppins',
          fontSize: 40,
          alignSelf: 'flex-start',
          paddingLeft: '20px',
        }}
      >
        Experiance
      </h2>
      <div
        style={{
          display: 'flex ',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <img src={nelia} width="30px" height="30px" />
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 25,
            fontWeight: 700,
            textDecoration: 'underline',
            color: '#66b2ff',
          }}
        >
          Nelia Intelligent Systems:
        </p>
      </div>
      <div style={{ paddingLeft: '60px', marginTop: '-20px' }}>
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            color: 'white',
          }}
        >
          <strong> EnviroTrack:</strong> an IoT application that monitors and
          retrieves temperature and humidity data from a sensor.
        </p>
      </div>
      <div
        style={{
          display: 'flex ',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <img src={piassa} width="30px" height="30px" />
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 25,
            fontWeight: 700,
            textDecoration: 'underline',
            color: '#66b2ff',
          }}
        >
          PIASSA DZ:
        </p>
      </div>
      <div style={{ paddingLeft: '60px', marginTop: '-20px' }}>
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            color: 'white ',
          }}
        >
          <strong> Piassa App:</strong> mobile app for buying car parts online,
          letting users choose from various brands and models and have their
          order shipped to them.
        </p>

        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            color: 'white',
          }}
        >
          <strong>Simon Web:</strong> it is a platform for Piassa partners to
          receive, accept, and track orders. Ask ChatGPT
        </p>
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            color: 'white',
          }}
        >
          <strong>Piassa Expert:</strong> it is a dedicated website for
          insurance company experts to manage and process their work efficiently
        </p>
      </div>
      <div
        style={{
          display: 'flex ',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <img src={winstonRed} width="30px" height="30px" />
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 25,
            fontWeight: 700,
            textDecoration: 'underline',
            color: '#66b2ff',
          }}
        >
          Winston Red :
        </p>
      </div>
      <div style={{ paddingLeft: '60px', marginTop: '-20px' }}>
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            color: 'white',
          }}
        >
          <strong>ShopsCraft:</strong> it is a free, modern e-commerce platform
          offering three themes — <strong>Badaro</strong>,{' '}
          <strong>Meraco</strong>, and <strong>Shadow</strong> — for a
          customizable online store experience.
        </p>
      </div>
    </motion.div>
  )
}

export default ExperianceComponent
