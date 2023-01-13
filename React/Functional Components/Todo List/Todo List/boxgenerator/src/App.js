import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React, { useState } from  'react';

function App() {
      const [todos , setTodos]=useState([]);
      
      const fun=(todo)=>{
        setTodos([todo,...todos])
      }

      const updatTask=(id)=>{
        const taskToUpdate = todos.filter((todo,i)=> i == id);
        taskToUpdate[0].completed = !taskToUpdate[0].completed;
        setTodos([...todos]);
      }


      const deleteTask=(index)=>{
        setTodos(todos.filter((todo,i) => i != index))
      }
      return(
        <>
        <Form todos={todos} myfun={fun}/>
        <Display todos={todos} deleteTask ={deleteTask} updatTask={updatTask} />
      </>
      );

}

export default App;
