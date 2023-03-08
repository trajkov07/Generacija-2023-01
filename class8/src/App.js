import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          {/* 
          This is not recommended since it refreshes the page
          <li>
            <a href="/">Home anchor</a>
          </li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <a href="/books">Books anchor</a>
          </li> */}
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* the part in element could also be just a regular jsx element */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// PAUZA DO 9:15

export default App;

// Kreirajte edna komponenta Home koja sto vnatre kje ima nekoj tekst
// Welcome to my page, I am learning React Router.
// Da kreirame druga komponenta movies i vnatre da imame nekoja lista od filmovi
// i tie filmovi da gi prikazeme so nekoj html, neka filmovite sodrzat
// id, ime, zanr i rating, neka ima minumum 3 filma
// Potoa kreirajte ruti za home i za movies i navigacija za da mozeme da stigneme
// do niv
