import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldType, setFieldType] = useState("password");
  const [selectedValue, setSelectedValue] = useState("Facebook");
  const [comment, setComment] = useState("");
  const [longComment, setLongComment] = useState(false);

  const apps = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "Twitter", name: "Twitter" },
  ];

  function changeFieldType() {
    setFieldType(fieldType === "password" ? "text" : "password");
  }

  useEffect(() => {
    console.log("Comment Value: " + comment);
  }, [comment]);

  function submitForm(event) {
    event.preventDefault();
    alert(
      `Username: ${username}\nPassword: ${password}\nSelected App: ${selectedValue}`
    );
  }

  return (
    <div id="login">
      <form onSubmit={submitForm}>
        <Input
          tip="text"
          ime="username"
          pisiNesto="Enter Username"
          vrednost={username}
          pratiMiIzmeni={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          tip={fieldType}
          ime="password"
          pisiNesto="Enter Password"
          vrednost={password}
          pratiMiIzmeni={(e) => {
            setPassword(e.target.value);
          }}
          smeniTipNaPole={changeFieldType}
        />
        <Input
          tip="text"
          ime="comment"
          pisiNesto="Enter Comment"
          vrednost={comment}
          pratiMiIzmeni={(e) => {
            setComment(e.target.value);
          }}
          renderTextArea={longComment}
          changeField={() => {
            setLongComment(!longComment);
          }}
        />
        <Dropdown
          elements={apps}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        />
        <button className="action-button">Sign in</button>
      </form>
    </div>
  );
};
