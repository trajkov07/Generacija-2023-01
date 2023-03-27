import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "./hooks/useQuery";
import axios from "axios";
import { UseRef } from "./UseRef";
import { Stopwatch } from "./Stopwatch";

function App() {
  const { response } = useQuery(
    axios.get("https://jsonplaceholder.typicode.com/users/1")
  );
  return (
    <div className="App">
      <h1>Custom hook</h1>
      <div>{response.name}</div>
      <div>{response.email}</div>
      <h1>Use ref</h1>
      <UseRef />
      <Stopwatch />
    </div>
  );
}

export default App;
