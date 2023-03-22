import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Comments } from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1>Redux part II</h1>
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
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

// Da kreirate 2 dopolnitelni akcii / reduceri vo istiot primer
// i tie neka pokazuvaat useri i postovi od api-to
// https://jsonplaceholder.typicode.com/
