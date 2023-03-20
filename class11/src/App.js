import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  depositBalance,
  withdrawBalance,
} from "./redux/actions/balanceActions";
import { Salary } from "./components/Salary";

function App() {
  // const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    // setBalance(balance + Number(value));
    dispatch(depositBalance(value));
  };

  const handleWithdraw = () => {
    console.log(value);
    // setBalance(balance - Number(value));
    dispatch(withdrawBalance(value));
  };

  return (
    <div className="App">
      <h1>My bank account</h1>
      <h1>Balance: {balance} </h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>
      <Salary />
    </div>
  );
}

export default App;
