import PropTypes from "prop-types";

import CoffeeLogo from "../images/logo.svg";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header-component">
      <img src={CoffeeLogo} alt="Coffee logo" />
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
