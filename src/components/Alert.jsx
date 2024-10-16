import PropTypes from "prop-types";
import "./Alert.css";

const BACKGROUND_COLORS = {
  success: "#adc6a8",
  error: "#f5c6cb",
};

function Alert({ children, type, visible }) {
  return (
    <div
      className={`alert-component ${visible && "visible"}`}
      role="alert"
      hidden={!visible}
      style={{ backgroundColor: BACKGROUND_COLORS[type] }}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Alert;
