import logo from "./logo.svg";
import "./App.css";
import { Motivation } from "./components/Motivation";
import { FetchExamples } from "./components/FetchExamples";

// npm install axios

function App() {
  return (
    <div className="App">
      <h1>Class 10</h1>
      {/* <Motivation /> */}
      <FetchExamples />
    </div>
  );
}

export default App;

// API -> https://rickandmortyapi.com/api/character
// prodolzuvanje na vezbata od predavanjeto
// prikazi gi site objekti so id, ime, status i slika

// da se prikazuva imeto na lokacijata na likot i so klik na nea
// da prikazuvame po detalni informacii

// da se prikazat episodite za sekoj lik i so klik na sekoja od episodite
// da dademe poveke informacii za episodata
