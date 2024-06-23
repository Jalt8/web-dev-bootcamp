import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="text">Contained</Button>
      <Button variant="contained" size="large">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button variant="contained" color="success" size="small">Contained</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <RatingDemo/>
      <FormDemo/>
      <ButtonAppBar/>
    </>
  )
}

export default App
