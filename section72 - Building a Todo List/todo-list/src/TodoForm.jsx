import { IconButton, Input } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';


export default function TodoForm({addTodo}) {
    const [task, setTask] = useState('')
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        addTodo(task)
        setTask('')
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='outlined-basic'
                    label="Add Todo"
                    variant='outlined'
                    onChange={handleChange}
                    value={task}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label='create todo' edge='end' type='submit'>
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
    )
}