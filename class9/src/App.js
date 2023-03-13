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
