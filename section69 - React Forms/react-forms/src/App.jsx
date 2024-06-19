import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameForm from './UsernameForm'
import SignUpForm from './SignUpForm'
import BetterSignUpUserForm from './BetterSignUpForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
import ValidatedShoppingList from './ValidatedShoppingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ValidatedShoppingList />
    </>
  )
}

export default App
