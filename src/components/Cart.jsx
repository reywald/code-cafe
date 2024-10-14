import PropTypes from "prop-types";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

import "./Cart.css";
import CartRow from "./CartRow";
import ItemType from "../types/item";

function Cart({ cart, dispatch, items }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");

  const subTotal = cart.reduce((accum, cartItem) => {
    const item = items.find((i) => i.itemId === cartItem.itemId);
    return accum + (item.salePrice ?? item.price) * cartItem.quantity;
  }, 0);

  const taxPercentage = +(zipCode[0] ?? "0") + 1;
  const taxRate = taxPercentage / 100;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;
  const isFormValid = zipCode.length === 5 && name.trim();

  const submitOrder = (event) => {
    event.preventDefault();
    console.log("name: ", name);
    console.log("phone: ", phone);
    console.log("zipcode: ", zipCode);
  };

  const setFormattedPhone = (newNumber) => {
    const digits = newNumber.replace(/\D/g, "");
    const formatted = digits
      .split("")
      .map((c, idx) => (idx === 2 || idx === 5 ? `${c}-` : c))
      .join("");
    setPhone(formatted);
  };

  return (
    <div className="cart-component">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <CartRow
                  key={item.itemId}
                  cartItem={item}
                  items={items}
                  dispatch={dispatch}
                />
              ))}
            </tbody>
          </table>

          <div>Subtotal: ${subTotal.toFixed(2)}</div>

          {zipCode.length === 5 ? (
            <>
              <div>Tax: ${tax.toFixed(2)}</div>
              <div>Total: ${total.toFixed(2)}</div>
            </>
          ) : (
            <div className="warning">Enter ZIP Code to get total</div>
          )}

          <h2>Checkout</h2>
          <form onSubmit={submitOrder}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </label>
            <label htmlFor="phone">
              Phone Number
              {/* <input
                type="tel"
                id="phone"
                onChange={(event) => setFormattedPhone(event.target.value)}
                value={phone}
              /> */}
              <PatternFormat
                format="###-###-####"
                onValueChange={(values, sourceInfo) => setPhone(values.value)}
                value={phone}
              />
            </label>
            <label htmlFor="zipcode">
              ZIP Code
              <input
                type="text"
                id="zipcode"
                maxLength="5"
                inputMode="numeric"
                onChange={(event) => setZipCode(event.target.value)}
                value={zipCode}
                required
              />
            </label>
            <button type="submit" disabled={!isFormValid}>
              Order Now
            </button>
          </form>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Cart;
