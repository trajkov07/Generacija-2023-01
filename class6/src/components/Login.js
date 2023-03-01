import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const Login = () => {
  //   const apps = ["Facebook", "Instagram", "Twitter"];
  const apps = [
    { id: 1, name: "Facebook" },
    { id: 2, name: "Instagram" },
    { id: 3, name: "Twitter" },
  ];
  const [selectedValue, setSelectedValue] = useState("Facebook");

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <div id="login">
      <form>
        {
          // first the inputs (homework)
        }
        <Dropdown
          options={apps}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        />
        <button className="action-button">Sign in</button>
      </form>
    </div>
  );
};
