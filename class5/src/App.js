import logo from "./logo.svg";
import "./App.css";
import { CounterClass } from "./components/CounterClass";
import { useEffect, useState } from "react";
import { Todos } from "./components/Todos";
import { Users } from "./components/Users";

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

  let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
    },
  ];

  return (
    <div className="App">
      <h1>Hello from react!</h1>
      {/* <CounterClass /> */}
      {/* <input
        type="text"
        value={newTodo}
        placeholder="Enter new Todo"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <br />
      <button onClick={addNewTodo}>Add Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} /> */}
      <Users users={users} />
    </div>
  );
}

export default App;
