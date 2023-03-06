import { Location } from "./Location";
import { User2Context } from "../App";
import React from "react";

export const Korisnik = () => {
  const user = React.useContext(User2Context);
  console.log(user);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Job Position: {user.jobPosition}</p>
      <p>Hobby: {user.hobby}</p>
      <p>EMBG: {user.embg}</p>
      <Location />
    </div>
  );
};
