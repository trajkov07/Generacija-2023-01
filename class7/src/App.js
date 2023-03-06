import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { UserInfo } from "./components/UserInfo";
import { User2Context } from "./uttils/User2Context";

// export const User2Context = React.createContext();

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
// PAUZA DO 21:00h
function App() {
  return (
    <div className="App">
      <h1>React Context!</h1>
      {/* <User /> */}
      {/* value is something that must be used for providing values in the context */}
      <User2Context.Provider
        value={{ user, theme: "dark", fontSize: 35, role: "Admin" }}
      >
        <Homepage />
        <UserInfo />
      </User2Context.Provider>
    </div>
  );
}

export default App;
