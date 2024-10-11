import "./Home.css";
import Thumbnail from "./Thumbnail";
import { itemImages } from "../items";
import PropTypes from "prop-types";
import ItemType from "../types/item";

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          className="thumbnail-component"
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
          itemId={item.itemId}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
