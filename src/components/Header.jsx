import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UserDetails from "./UserDetails";
import CoffeeLogo from "../images/logo.svg";
import CartIcon from "../images/cart.svg";
import "./Header.css";

function Header({ title, cart }) {
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="Coffee logo" />
        <h1>{title}</h1>
      </Link>

      <div className="menu">
        <Link to="/cart">
          <img src={CartIcon} alt="Cart" />
          <div className="badge">{cartQuantity}</div>
        </Link>
      </div>

      <UserDetails />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Header;
