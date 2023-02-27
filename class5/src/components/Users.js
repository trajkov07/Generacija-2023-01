import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Users = (props) => {
  const [usersToShow, setUsersToShow] = useState();
  const [value, setValue] = useState("");

  const onChange = (event) => {
    let value = event.target.value;
    setValue(value);
    console.log(value);
  };

  useEffect(() => {
    if (value) {
      const filteredUsers = props.users.filter((user) => {
        return user.username.includes(value);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    } else {
      setUsersToShow(props.users);
    }
    console.log("initial load");
  }, [value]);

  return (
    <div>
      <div>
        <p>Filter here</p>
        <input type="text" value={value} onChange={onChange} />
      </div>
      <div>
        {usersToShow?.map((user, i) => {
          return (
            <div
              key={i}
              style={{ float: "left", width: 300, marginBottom: 30 }}
            >
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
