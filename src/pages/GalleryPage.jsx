import React from 'react'
import Field from '../components/Field'
import WebAnim from '../assets/lottieFiles/Computer.json'
import MobileAnim from '../assets/lottieFiles/Phone Wifi.json'
import VantaNet from '../components/VantaNet'
import desktop from '../assets/lottieFiles/desktop.json'
import mobile from '../assets/lottieFiles/phone.json'
import { Link } from 'react-router-dom'

function GalleryPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: 'rgba(30, 58, 92, 0.65)',
        overflow: 'hidden',
      }}
    >
      <VantaNet
        color={0x66ccff}
        backgroundColor={0x1e3a5c}
        points={15}
        maxDistance={22}
        spacing={20}
      />

      <Link
        to={'/FullStackProjects'}
        style={{ textDecoration: 'none', color: 'inherit' }}
        data-discover="true"
      >
        <Field colorNum={1} id={1} logo={desktop} message={'FullStack'} />
      </Link>
      <Link
        to={'/MobileProjects'}
        style={{ textDecoration: 'none', color: 'inherit' }}
        data-discover="true"
      >
        <Field colornum={2} id={2} logo={mobile} message={'Mobile'} />
      </Link>
    </div>
  )
}

export default GalleryPage
