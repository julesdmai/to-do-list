import { useState } from "react"
import "./styles.css";

export default function App() {

  // create another piece of state 'todos'
  // initialized to empty array

  // when to use state?
  // any type of data that you want to have
  // re-render your component when it changes
  
  // so when we make changes to newItem or todos
  // we want our app to re-render to reflect those changes

  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit (e) {
    e.preventDefault();

    // when we need the current value, we pass in a function like this
    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]  
    })


    // Reset the input on submit
    setNewItem("")
  }

  // want to update todos 'completed' property
  function toggleTodo (id, completed, ) {
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


  return (
    <>
    {/* autocomplete="off" on the <form> hides history */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            // value needs to be assigned to a variable to be dynamic
            // and the way we change this variable is to call
            // the setter function
            // note: when you change the state variable, it re-renders the component
            // when you don't need the current value, you can access state this way
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list"j >
        {/* .map() returns an array
        In React, arrays are rendered as elements one after another */}
        {todos.map(todo => {
          // each iterated tag needs key
          return <li key={todo.id}>
          <label>
            {/* when checkbox is changed, invoke function toggleTodo. the function takes two arguments. the todo.id and the todo.completed */}
            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        })}
      </ul>
    </>
  )
}