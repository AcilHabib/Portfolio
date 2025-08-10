import React, { useMemo } from 'react'
import MovingBox from './MovingBox'

const randomPercentage = (min = 0, max = 85) => {
  return Math.round(Math.random() * (max - min) + min) + '%'
}

function MovingBoxes() {
  const boxes = useMemo(
    () => [
      { color: '#0066ff' },
      { color: '#FF66CC' },
      { color: '#0066ff' },
      { color: '#FF66CC' },
      { color: '#0066ff' },
    ],
    []
  )

  const movingBoxes = useMemo(
    () =>
      boxes.map((box) => ({
        ...box,
        top: randomPercentage(20, 90),
        left: randomPercentage(5, 80),
        size: Math.round(Math.random() * 120) + 80,
      })),
    [boxes]
  )
  return (
    <>
      {movingBoxes.map((box, index) => (
        <MovingBox
          key={index}
          top={box.top}
          left={box.left}
          color={box.color}
          size={box.size}
        />
      ))}
    </>
  )
}

export default MovingBoxes
