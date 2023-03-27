import logo from "../logo.svg";
import "../App.css";
import { Nav } from "./Nav";
import { Navigate, Route, Routes } from "react-router-dom";
import { Weather } from "./Weather";

function App() {
  return (
    <div id="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/local-weather" />} />
        <Route path="/search-cities" element={<h1>Search every City</h1>} />
        <Route path="/local-weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
