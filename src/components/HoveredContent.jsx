import React, { useContext } from 'react'
import { aboutContext } from '../contexts/AboutContext'

function HoveredContent({}) {
  const {
    id,
    first,
    second,
    third,
    fourth,
    setFirst,
    setSecond,
    setThird,
    setFourth,
  } = useContext(aboutContext)

  switch (id) {
    case 1:
      setFirst('Assil Habib')
      setSecond('I turn ideas into Code and Logic ')
      setThird('I make gravity my workout partner.')
      setFourth('I run on coffee and curiosity')
      break

    case 2:
      setFirst('Computer Science graduate since 2023')
      setSecond('FullStack Developper since 2024')
      setThird('Mobile Developper since 2022')
      setFourth('')
      break

    case 3:
      setFirst('assilehabib@gmail.com')
      setSecond('Instagram: iacilehabib')
      setThird('LinkedIn:Assile Habib ')
      setFourth('')
      break

    default:
      break
  }

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <p
            style={{
              fontFamily: 'Chewy ',
              fontSize: 50,
              fontWeight: 150,
              fontStyle: 'normal',
            }}
          >
            {first}
          </p>
        </li>
        <li>
          <p
            style={{
              fontFamily: 'Chewy',
              fontSize: 50,
              fontWeight: 'thin',
            }}
          >
            {second}
          </p>
        </li>
        <li>
          <p
            style={{
              fontFamily: 'Chewy ',
              fontSize: 50,
              fontWeight: 'thin',
            }}
          >
            {third}
          </p>
        </li>
        <li>
          <p
            style={{
              fontFamily: 'Chewy ',
              fontSize: 50,
              fontWeight: 'thin',
            }}
          >
            {fourth}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default HoveredContent
