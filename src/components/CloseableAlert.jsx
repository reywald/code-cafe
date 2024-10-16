import PropTypes from "prop-types";

import Alert from "./Alert";

function CloseableAlert({ children, onClose, type, visible }) {
  return (
    <>
      <Alert type={type} visible={visible}>
        {children}
      </Alert>
      <button onClick={onClose} hidden={!visible}>
        Close
      </button>
    </>
  );
}

CloseableAlert.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CloseableAlert;
