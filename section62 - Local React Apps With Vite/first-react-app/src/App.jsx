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
import ShoppingList from './ShoppingList.jsx'
import PropertyList from './PropertyList.jsx'
import Clicker from './Clicker.jsx'
import Form from './Form.jsx'
import Counter from './Counter.jsx'
import Toggle from './Toggle.jsx'
import ToggleCounter from './ToggleCounter.jsx'
import ColorItem from './ColorItem.jsx'
import ColorBlock from './ColorBlock.jsx'

const data = [
  {id:1, item: 'eggs', qty: 3, completed: false},
  {id:2, item: 'milk', qty: 1, completed: true},
  {id:3, item: 'chicken breasts', qty: 4, completed: false},
  {id:4, item: 'carrots', qty: 6, completed: true},
]

const properties = [
  { id: 129031, name: 'Desert Yurt', rating: 4.8, price: 200 },
  { id: 129032, name: 'Luxury Villa', rating: 4.9, price: 500 },
  { id: 129033, name: 'Beach House', rating: 4.3, price: 150 },
  { id: 129034, name: 'Mountain Cabin', rating: 4.6, price: 250 },
  { id: 129035, name: 'Cactus Retreat', rating: 4.2, price: 300},
  { id: 129036, name: 'Redwood Treehouse Exscape', rating: 4.6, price: 120},
  { id: 129037, name: 'Oceamview Condo', rating: 4.0, price: 140},
  { id: 129038, name: 'Amazon Heights', rating: 3.5, price: 96},
  { id: 129039, name: 'Gold Miner Campground', rating: 3.0, price: 175},
  { id: 129040, name: 'Igloo', rating: 4.9, price: 175},

]

const colors = [
  "#191970", // Midnight Blue
  "#DC143C", // Crimson
  "#32CD32", // Lime Green
  "#1E90FF", // Dodger Blue
  "#DAA520", // Goldenrod
  "#B22222", // Firebrick
  "#DA70D6", // Orchid
  "#2E8B57", // Sea Green
  "#00BFFF", // Deep Sky Blue
  "#FF8C00", // Dark Orange
  "#40E0D0", // Turquoise
  "#6A5ACD", // Slate Blue
  "#FA8072", // Salmon
  "#8B008B", // Dark Magenta
  "#F08080", // Light Coral
  "#9370DB", // Medium Purple
  "#4682B4", // Steel Blue
  "#00FF7F", // Spring Green
  "#FF6347", // Tomato
  "#6B8E23"  // Olive Drab
];  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Chicken/>
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
    <ShoppingList items={ data }/>
    <PropertyList properties={ properties }/>
    <Form />
    <Clicker message="Testing" buttonText="Click Me Now!!!"/>
    <Counter/>
    <Toggle/>
    <ToggleCounter/>*/}
    <ColorBlock rows={5} columns={5} colors={colors}/>
    </>
  )
}

export default App
