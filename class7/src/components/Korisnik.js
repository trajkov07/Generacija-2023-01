import { Location } from "./Location";
import { User2Context } from "../uttils/User2Context";
import React from "react";

export const Korisnik = () => {
  const contextObject = React.useContext(User2Context);
  console.log(contextObject);
  const user = contextObject.user;
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
