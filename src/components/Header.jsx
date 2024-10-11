import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CoffeeLogo from "../images/logo.svg";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="Coffee logo" />
        <h1>{title}</h1>
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
