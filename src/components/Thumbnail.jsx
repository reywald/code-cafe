import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Thumbnail.css";

function Thumbnail({ image, title, itemId }) {
  return (
    <Link to={`/details/${itemId}`} className="thumbnail-component">
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Thumbnail;
