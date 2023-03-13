import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Comment } from "./components/Comment";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comment/:commentId" element={<Comment />} />
      </Routes>
    </div>
  );
}
// PAUZA DO 21:05

export default App;

// Da kreirame navigacija, kaj sto kje imame homepage so
// nekoj tekst Welcome to our page! i uste edna ruta sto kje ne nosi na users
// potoa da kreirame nekoja komponenta Users kaj sto vnatre kje prikazuvame
// useri od api-to https://jsonplaceholder.typicode.com/ da prikazuvame
// samo ime i prezime, dokolku nema useri da prikazuvame Loading ....

// Pokraj ovie osnovni informacii, da imame nekoj nacin da pokazime
// detali za sekoj userite, vo taa posebna komponenta pokazete sto moze
// poveke za userot
