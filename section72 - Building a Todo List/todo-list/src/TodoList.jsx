import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
};


export default function CheckboxList() {
  const [todos, setTodos] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const addTodo = (task) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), task, completed: false },
    ]);
  };
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      m: 3,
    }}>
      <Typography variant='h3'>Todo List</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;
          return (
            <TodoItem key={todo.id} todo={todo} labelId={labelId} removeTodo={removeTodo} toggleTodo={toggleTodo} addTodo={addTodo} />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
