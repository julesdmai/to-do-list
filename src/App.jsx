import "./styles.css";
import { useState } from "react"
import "./NewTodoForm";
import NewTodoForm from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  // we need a way to update the state
  function addTodo(title) {
    // when we need the current value, we pass in a function like this
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
    });
  }


  // want to update todos 'completed' property
  function toggleTodo(id, completed,) {
    // call the setter function to updaate state
    // because we care about the current value, we pass in a function like this
    // This approach is recommended when the new state depends on the old state, ensuring you're working with the most recent state.
    setTodos(currentTodos => {
      // .map() evaluates to an a new array created by mapping over 'currentTodos'
      return currentTodos.map(todo => {
        // for each todo item
        // checking if its 'id' matches the 'id' parameter passed to 'toggleTodo'
        if (todo.id === id) {
          // if the 'if' of the current 'todo' matches the 'id' passed to the function, a new object is created and returned
          // spreads the properties of the current todo item
          // updates the 'completed' property to the 'toggleTodo' function
          return { ...todo, completed }
        }

        // if the 'id' of the current todo item does not match the 'id' passed into the function, the 'todo' item is returned unchanged
        // returning unchanged todo items
        return todo;
      })
    })
  }
  // The purpose of the toggleTodo function is to toggle the completion status of a specific todo item in the todos array. 
  // By using the map method, it ensures that a new array is returned (as required by React)...
  // with all items remaining the same except for the one that matches the specified id, which gets its completed status updated.
  // This pattern ensures immutability of the state, a key principle in React development, by creating a new array instead of modifying the existing one directly, thus enabling React to efficiently detect changes and update the UI accordingly.


  function deleteTodo(id) {
    setTodos(currentTodos => {
      // if id is not the id passed in, then want to keep  it
      // if id is the same as id passed in, then remove
      return currentTodos.filter(todo => (todo.id !== id))
    })
  }


  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
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
                onChange={e => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            {/* onClick needs to invoke an anonymous function returning the function invocation of deleteTodo passing in todo.id
            onClick needs an arrow function
            you don't want to pass in the result of calling deleteTodo
            */}
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        })}
      </ul>
    </>
  )
}