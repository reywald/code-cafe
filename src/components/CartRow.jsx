import PropTypes from "prop-types";

import { CartTypes } from "../../reducers/cartReducer";
import ItemType from "../types/item";

function CartRow({ cartItem, dispatch, items }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);
  const removeItemFromCart = () => {
    dispatch({ type: CartTypes.REMOVE, itemId: item.itemId });
  };
  const addItemToCart = () => {
    dispatch({ type: CartTypes.ADD, itemId: item.itemId });
  };
  const decreaseCartItem = () => {
    dispatch({ type: CartTypes.DECREASE, itemId: item.itemId });
  };

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.title}</td>
      <td>
        ${((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
      </td>
      <td>
        <button onClick={addItemToCart}>+</button>
      </td>
      <td>
        <button onClick={decreaseCartItem}>-</button>
      </td>
      <td>
        <button onClick={removeItemFromCart}>X</button>
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  cartItem: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default CartRow;
