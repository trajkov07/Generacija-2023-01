import React from "react";
import { User2Context } from "../uttils/User2Context";
import { UserContext } from "../index";

export function UserInfo() {
  const context = React.useContext(User2Context);
  const userContext = React.useContext(UserContext);

  return (
    <div>
      Information about logged in user
      <p>Theme used: {context.theme}</p>
      <p>Font size: {context.fontSize}</p>
      <p>Role: {context.role}</p>
      <p>Name: {userContext}</p>
    </div>
  );
}
