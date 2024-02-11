import React from 'react'
import TodoItem from "./TodoItem";


export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list" >
            {/* This is called short circuiting */}
            {todos.length === 0 && "No todos"}
            {/* .map() returns an array
            In React, arrays are rendered as elements one after another */}
            {todos.map(todo => {
                // each iterated tag needs key
                // spread props of todo
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo} 
                    />
                );
            })}
        </ul>
    )
}
