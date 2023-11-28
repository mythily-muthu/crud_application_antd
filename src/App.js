import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Books } from "./components/datas";
import { useState } from "react";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import SingleBook from "./components/SingleBook";
function App() {
  const [books, setBooks] = useState(Books);

  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home books={books} setBooks={setBooks} />}
          />
          <Route path="/singlebook/:id" element={<SingleBook />} />
          <Route
            path="/addbook"
            element={<AddBook books={books} setBooks={setBooks} />}
          />
          <Route path="/editbook/:id" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
