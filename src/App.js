import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';




const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
 

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header></Header>
        </div>
        <div>
          <Form 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
          ></Form>
        </div>
        <div>
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
}



export default App;
