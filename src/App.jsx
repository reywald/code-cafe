import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DetailItem from "./components/DetailItem";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Rewards from "./components/Rewards";
import Tier from "./components/Tier";

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

      {items.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/details" element={<Details items={items} />}>
            <Route path=":id" element={<DetailItem items={items} />} />
            <Route index element={<div>No Item Selected</div>} />
          </Route>
          <Route path="/" element={<Home items={items} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/rewards" element={<Rewards />}>
            <Route path=":tier" element={<Tier />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
