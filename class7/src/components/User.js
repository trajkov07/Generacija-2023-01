import { UserContext } from "../index";

export function User() {
  return (
    <UserContext.Consumer>
      {(value) => <h1>Hello {value} from React Context</h1>}
    </UserContext.Consumer>
  );
}
