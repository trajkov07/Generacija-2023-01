import logo from "./logo.svg";
import "./App.css";
import { StateTutorial } from "./components/StateTutorial";
import { Dates } from "./components/Dates";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  // useEffect is called on first load
  // useEffect is called when some of the states are changed
  // but only those that are included in the array []
  useEffect(() => {
    console.log("Inside useEffect");
  }, [password]);
  // [] - this is called dependency array

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <StateTutorial /> */}
      {/* <Dates /> */}
      <input
        type="text"
        placeholder="enter username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="enter password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="enter comment"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />

      <p>username: {username}</p>
      <p>password: {password}</p>
      <p>Comment: {comment}</p>
    </div>
  );
}

export default App;
