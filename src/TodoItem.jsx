import React from 'react'

// when checkbox is changed, invoke function toggleTodo. the function takes two arguments. the todo.id and the todo.completed
// onClick needs to invoke an anonymous function returning the function invocation of deleteTodo passing in todo.id. onClick needs an arrow function. you don't want to pass in the result of calling deleteTodo
export default function TodoItem({ completed, id, title, toggleToDo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)} 
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    )
}
