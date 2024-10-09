import "./Thumbnail.css";

function Thumbnail({ image, title }) {
  return (
    <a href="#todo" className="thumbnail-component">
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </a>
  );
}

export default Thumbnail;
