import React from 'react';

const TodoList = ({todos, setTodos}) => {
    return (
        <div>
            {todos.map((todo) => {
                return(
                <li className="todo-list" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title} 
                        className="list" 
                        onChange={(event) => event.preventDefault()}>
                    </input>
                </li>
                )
            })}
        </div>
    )
};



export default TodoList;
