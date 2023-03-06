import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";

export const UserContext = React.createContext();
export const User2Context = React.createContext();

const user = {
  name: "Martin",
  surname: "Trajkov",
  jobPosition: "Developer",
  hobby: "Football",
  embg: 12444546455,
  city: "Radovish",
  street: "8 Septemvri",
  number: 232,
};

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Martin">
        <h1>React Context!</h1>
        {/* <User /> */}
        <User2Context.Provider value={user}>
          <Homepage user={user} />
        </User2Context.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
