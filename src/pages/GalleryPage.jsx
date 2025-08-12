import React from 'react'
import Field from '../components/Field'
import WebAnim from '../assets/lottieFiles/Computer.json'
import MobileAnim from '../assets/lottieFiles/Phone Wifi.json'

function GalleryPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Field colorNum={1} id={1} logo={WebAnim} />
      <Field colornum={2} id={2} logo={MobileAnim} />
    </div>
  )
}

export default GalleryPage
