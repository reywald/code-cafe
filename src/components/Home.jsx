import "./Home.css";
import Thumbnail from "./Thumbnail";
import { itemImages } from "../items";
import PropTypes from "prop-types";

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          className="thumbnail-component"
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      imageId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      salePrice: PropTypes.number,
    })
  ).isRequired,
};

export default Home;
