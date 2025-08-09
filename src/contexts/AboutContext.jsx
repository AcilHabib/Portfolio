import React from 'react'
import { createContext, useState } from 'react'

export const aboutContext = createContext(null)

function AboutProvider({ children }) {
  const [id, setId] = useState(null)
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [fourth, setFourth] = useState('')

  const value = {
    id,
    first,
    second,
    third,
    fourth,
    setId,
    setFirst,
    setSecond,
    setThird,
    setFourth,
  }
  return <aboutContext.Provider value={value}>{children}</aboutContext.Provider>
}

export default AboutProvider
