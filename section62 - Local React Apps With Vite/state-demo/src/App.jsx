import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeperEx from './ScoreKeeperEx'

function App() {
  return (
    <>
      {/* <h1>State Demo!</h1>
      <Counter/>
      <Dumbo/> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
      <ScoreKeeperEx numPlayers={5} maxScore={5}/>
    </>
  )
}

export default App
