import { User2Context } from "../uttils/User2Context";
import React from "react";

export const Location = () => {
  const contextLocation = React.useContext(User2Context);
  const location = contextLocation.user;

  return (
    <div>
      <h1>Location</h1>
      <p>City: {location.city}</p>
      <p>Street: {location.street}</p>
      <p>Number: {location.number}</p>
    </div>
  );
};
