import logo from "./logo.svg";
import "./App.css";
import { CounterClass } from "./components/CounterClass";
import { useEffect, useState } from "react";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Drink watter", done: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(newTodo);
  });

  function addNewTodo() {
    let newObject = {
      text: newTodo,
      done: false,
      id: todos.length + 1,
    };
    setTodos([...todos, newObject]);
    setNewTodo("");
  }

  const markTodoAsDone = (todo) => {
    setTodos([
      ...todos.map(
        (item) =>
          item.id === todo.id // looking for the clicked element by id
            ? { id: item.id, text: item.text, done: !item.done } // if element is found
            : item // this goes for all the elements that are not changed
      ),
    ]);
  };

  return (
    <div className="App">
      <h1>Hello from react!</h1>
      {/* <CounterClass /> */}
      <input
        type="text"
        value={newTodo}
        placeholder="Enter new Todo"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <br />
      <button onClick={addNewTodo}>Add Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
    </div>
  );
}

export default App;
