import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, useRoutes, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";
import { BookLayout } from "./components/BookLayout";
import "./css/style.css";

function App() {
  // let routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <div className="App">
      {/* 
      We can have multiple routes with the same path
      <Routes>
        <Route path="/books" element={<h1>Some Extra content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          {/* 
          This is not recommended since it refreshes the page
          <li>
            <a href="/">Home anchor</a>
          </li> */}
          <li>
            {/* <Link to="/" replace>
              Home
            </Link> */}
            {/* <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/"
            >
              Home
            </NavLink> */}
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
            <a href="/books">Books anchor</a>
          </li> */}
          <li>
            {/* <Link to="/books">Books</Link> */}
            {/* <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/books"
            >
              Books
            </NavLink> */}
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {/*
        // another way to show routes, through javascript
      {routes} */}
      <Routes>
        {/* the part in element could also be just a regular jsx element */}
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}

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

//Da dodademe uste edna komponenta newMovie koja kje se renderira na /movies/new
// vnatre neka imame nekoja forma so 3 inputi, ime / zanr i rating, da gi cuvame vo nekoj stejt
// i pri submit na formata da gi ispecatime vo konzola, da se napravi notFound komponenta
// kade sto vo h1 kje stavime 404 so crven tekst a pod nego nekoj obicen div koj kje bide sin
// neka bide so tekst The resource you are looking for is missing.

// Da ja iskoristime movies komponentata, vo koja preku props kje primame lista na filmovi
// i preku id-to na tie filmovi da mozeme da navigirame do konkreten film koj kje bide prikazan
// vo posebna komponenta, neka navigiranjeto bide preku id-to i na toj nacin da go prikazime konkretniov film
// listata na movies neka ja ima i vo movie komponentata (za pohrabrite neka taa se prakja preku context).
