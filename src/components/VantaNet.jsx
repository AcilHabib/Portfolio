// src/components/VantaNet.jsx
import React, { useRef, useEffect, useState } from 'react'
import NET from 'vanta/dist/vanta.net.min.js'
import * as THREE from 'three'

export default function VantaNet({
  color,
  backgroundColor,
  points,
  maxDistance,
  spacing,
}) {
  const ref = useRef(null)
  const [vanta, setVanta] = useState(null)

  useEffect(() => {
    if (!vanta && typeof window !== 'undefined') {
      setVanta(
        NET({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color, // line color
          backgroundColor, // canvas background
          points,
          maxDistance,
          spacing,
        })
      )
    }
    return () => {
      if (vanta) vanta.destroy()
    }
  }, [vanta, color, backgroundColor, points, maxDistance, spacing])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1, // behind page content
        pointerEvents: 'none', // allow clicks through
      }}
    />
  )
}
