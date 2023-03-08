import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";

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
      </Routes>
    </div>
  );
}

export default App;
