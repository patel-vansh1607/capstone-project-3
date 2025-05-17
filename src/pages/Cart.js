import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        cartItems.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: KSh {item.price}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: KSh {total}</h3>
    </div>
  );
};

export default Cart;
