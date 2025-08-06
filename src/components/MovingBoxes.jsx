import React from 'react'
import MovingBox from './MovingBox'

function MovingBoxes() {
  return (
    <>
      <MovingBox color="#0066ff" top={130} left={680} />
      <MovingBox color="#FF66CC" top={180} right={150} />
      <MovingBox color="#FF66CC" bottom={200} left={140} />
      <MovingBox color="#0066ff" bottom={250} right={880} />
    </>
  )
}

export default MovingBoxes
