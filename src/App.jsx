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

    // Will reset the input
    setNewItem("")
  }

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
            <input type="checkbox" checked={todo.completed}/>
            {todo.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        })}
      </ul>
    </>
  )
}

// 12m30s