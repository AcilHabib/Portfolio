import React from 'react'
import Lottie from 'lottie-react'

function FieldAnimation({ logo }) {
  return (
    <div style={{ width: '35%' }}>
      <Lottie animationData={logo} loop={true} />
    </div>
  )
}

export default FieldAnimation
