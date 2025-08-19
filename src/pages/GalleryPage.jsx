import React from 'react'
import Field from '../components/Field'
import WebAnim from '../assets/lottieFiles/Computer.json'
import MobileAnim from '../assets/lottieFiles/Phone Wifi.json'
import { Link } from 'react-router-dom'

function GalleryPage() {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#1e3a5c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90vh',
        overflow: 'hidden',
      }}
    >
      <Link to={'/FullStackProjects'}>
        <Field colorNum={1} id={1} logo={WebAnim} />
      </Link>
      <Link to={'/MobileProjects'}>
        <Field colornum={2} id={2} logo={MobileAnim} />
      </Link>
    </div>
  )
}

export default GalleryPage
