import { useState } from "react"

// note destructure onSubmit props
export default function NewTodoForm({ onSubmit }) {

    // create another piece of state 'todos'
    // initialized to empty array

    // when to use state?
    // any type of data that you want to have
    // re-render your component when it changes

    // so when we make changes to newItem or todos
    // we want our app to re-render to reflect those changes

    const [newItem, setNewItem] = useState("");



    function handleSubmit(e) {
        e.preventDefault();

        // // when we need the current value, we pass in a function like this
        // setTodos((currentTodos) => {
        //     return [
        //         ...currentTodos,
        //         { id: crypto.randomUUID(), title: newItem, completed: false },
        //     ]
        // });

        if (newItem === "") return;
        onSubmit(newItem);

        // Reset the input on submit
        setNewItem("")
    }




    return (
        // autocomplete="off" on the <form> hides history
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
    );
}
