import "./App.css";
import { Fragment, useState } from "react";
let nextId = 2;
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{ id: 1, task: "Learn React" }]);

  function inputChangeHandler(e) {
    setTodo(e.target.value);
  }
  function addTodoHandler() {
    if (todo.trim() === "") {
      alert("Please enter a valid todo");
      return;
    }
    console.log(nextId);
    setTodos([...todos, { id: nextId++, task: todo }]);

    setTodo("");
  }
  function deleteTodoHandler(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  const todosList = todos.map((item) => {
    return (
      <Fragment key={item.id}>
        <div className="todo">
          <div className="todo-text">
            <input type="checkbox" />
            <label>{item.task}</label>
          </div>
          <div
            className="delete"
            onClick={() => {
              deleteTodoHandler(item.id);
            }}
          >
            ❌
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <div className="app">
      <h1>Todo List 📒</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={todo}
          onChange={inputChangeHandler}
        />
        <button onClick={addTodoHandler}>Add</button>
      </form>
      <div>{todosList}</div>
    </div>
  );
}

export default App;
