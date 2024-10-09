import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { items } from "./items";

function App() {
  return (
    <>
      <Header />
      <Home items={items} />
    </>
  );
}

export default App;
