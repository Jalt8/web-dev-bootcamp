import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Chicken.css'
import Chicken from './Chicken.jsx'
import Greeter from './Greeter.jsx'
import Die from './Die.jsx'
import ListPicker from './ListPicker.jsx'
import DoubleDice from './DoubleDice.jsx'
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'
import Slots from './Slots.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chicken/>
    <Greeter name="Bill" from="Juvan" />
    <Greeter name="Sill" />
    <Greeter name="Jill" />
    <Die face={3} />
    <Die face={8} />
    <Die face={10} />
    <ListPicker arr={['React', 'Vite', 'TypeScript']} />
    <ListPicker arr={['A', 'B', 'C']} />
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />
    <Heading color='green' text='WELCOME!'/>
    <ColorList colors={['red', 'green', 'blue']}/>
    <ColorList colors={['olive', 'orangered', 'slategrey']}/>
    <Slots s1='🍎' s2='🍊' s3='🍋'/>
    <Slots s1='🍋' s2='🍋' s3='🍋'/>
    <Slots s1='🍋' s2='🍋' s3='🍊'/>
    </>
  )
}

export default App
