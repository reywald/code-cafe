import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Header title="Code Café" />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
