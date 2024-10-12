import PropTypes from "prop-types";

import "./Cart.css";
import CartRow from "./CartRow";
import ItemType from "../types/item";

function Cart({ cart, dispatch, items }) {
  const subTotal = cart.reduce((accum, cartItem) => {
    const item = items.find((i) => i.itemId === cartItem.itemId);
    return accum + (item.salePrice ?? item.price) * cartItem.quantity;
  }, 0);

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
