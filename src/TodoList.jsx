import React from 'react'

export default function TodoList({ todos }) {
    return (
        <ul className="list" >
            {/* This is called short circuiting */}
            {todos.length === 0 && "No todos"}
            {/* .map() returns an array
            In React, arrays are rendered as elements one after another */}
            {todos.map(todo => {
                // each iterated tag needs key
                return <li key={todo.id}>
                    <label>
                        {/* when checkbox is changed, invoke function toggleTodo. the function takes two arguments. the todo.id and the todo.completed */}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            // onChange={e => toggleTodo(todo.id, e.target.checked)}
                        />
                        {todo.title}
                    </label>
                    {/* onClick needs to invoke an anonymous function returning the function invocation of deleteTodo passing in todo.id
                    onClick needs an arrow function
                    you don't want to pass in the result of calling deleteTodo
                    */}
                    {/* <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button> */}
                </li>
            })}
        </ul>
    )
}
