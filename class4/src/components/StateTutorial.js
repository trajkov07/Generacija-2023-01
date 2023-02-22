import { useState } from "react";

export const StateTutorial = () => {
  // inputValue is the property that we use
  // setInputValue is a function which we use to change it
  const [inputValue, setInputValue] = useState("trajkov");

  //   let onChange = (event) => {
  //     console.log(event.target.value);
  //     const newValue = event.target.value;
  //     var element = document.getElementById("show");
  //     element.innerHTML = newValue;
  //   };

  let onChange = (event) => {
    console.log(event.target.value);
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h1>State!</h1>
      <input onChange={onChange} placeholder="enter your name" />
      <h2>{inputValue}</h2>
    </div>
  );
};
