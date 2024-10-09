import "./App.css";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";
import { itemImages } from "./items";
import { items } from "./items";

function App() {
  return (
    <>
      <Header />
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </>
  );
}

export default App;
