import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  depositBalance,
  withdrawBalance,
} from "./redux/actions/balanceActions";
import { changeCredit } from "./redux/actions/creditRatingActions";
import { Salary } from "./components/Salary";

function App() {
  // const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => state.balanceReducer.balance);
  const creditRating = useSelector((state) => state.creditReducer.creditRating);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    // setBalance(balance + Number(value));
    dispatch(depositBalance(value));
  };

  // PAUZA DO 21:09

  const handleWithdraw = () => {
    console.log(value);
    // setBalance(balance - Number(value));
    dispatch(withdrawBalance(value));
  };

  return (
    <div className="App">
      <h1>My bank account</h1>
      <h1>Balance: {balance} </h1>
      <h1>Credit rating: {creditRating}</h1>
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
      <hr />
      <div>
        <button onClick={() => dispatch(changeCredit(creditRating + 1))}>
          Increment my credit rating
        </button>
        <button onClick={() => dispatch(changeCredit(creditRating - 1))}>
          Decrement my credit rating
        </button>
      </div>
    </div>
  );
}

export default App;
// Da imame dve kopcinja koi ednoto kje bide za increment
// drugoto kje bide za decrement za vrednost 1, neka vrednosta vo stejtot
// prvicno e 0 i preku kopcinjava da mozeme da ja menuvame
// da imame dve akcii INCREMENT i DECREMENT za koj kje imame poseben reducer
// i normalno taa vrednost da se pokazuva na ekran

// Sega da kreirame nekoja nova komponenta, slicna na sallary, taa komponenta da ima vnatre
// eden input so broj i 3 kopcinja, ednoto da ja dodava momentalnata vrednost sto ja imame vo redux
// drugovo da ja dodava onaa vrednost sto se naoga vo inputot
// tretoto kopce da ja dodava vrednost od inputot no asinhrono posle 3 sekundi, moze da stavime
// vnatre nekoj console.log, za ova da iskoristime middleware i redux thunk
