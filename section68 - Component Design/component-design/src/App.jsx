import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lucky7 from './Lucky7'
import { sum } from './utils'
import Box from './Box'
import BoxGrid from './BoxGrid'

function lessThan7(dice) {
  return sum(dice) < 7
}

function sameNumber(dice) {
  return new Set(dice).size === 1
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BoxGrid />
    </>
  )
}

export default App
