import axios from "axios";
import { useEffect, useMemo, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import DetailItem from "./components/DetailItem";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Rewards from "./components/Rewards";
import Tier from "./components/Tier";
import {
  cartReducer,
  CartTypes,
  initialCartState,
} from "../reducers/cartReducer";
import CurrentUserContext from "./contexts/CurrentUserContext";
import Login from "./components/Login";
import Orders from "./components/Orders";

const storageKey = "cart";

function App() {
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      try {
        const storedCart = JSON.parse(localStorage.getItem(storageKey));
        return storedCart || initialState;
      } catch (error) {
        console.log("Error parsing cart", error);
        return initialState;
      }
    }
  );
  const addToCart = (itemId) => dispatch({ type: CartTypes.ADD, itemId });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get("/api/auth/current-user")
      .then((result) => setCurrentUser(result.data))
      .catch(console.error);
  }, []);

  const currentUserContextValue = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser]
  );

  return (
    <Router>
      <CurrentUserContext.Provider value={currentUserContextValue}>
        <Header title="Code Café" cart={cart} />

        {items.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route
              path="/cart"
              element={<Cart items={items} cart={cart} dispatch={dispatch} />}
            />
            <Route path="/details" element={<Details items={items} />}>
              <Route
                path=":id"
                element={<DetailItem items={items} addToCart={addToCart} />}
              />
              <Route index element={<div>No Item Selected</div>} />
            </Route>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/rewards" element={<Rewards />}>
              <Route path=":tier" element={<Tier />} />
            </Route>
            <Route path="/orders" element={<Orders items={items} />} />
          </Routes>
        )}
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
