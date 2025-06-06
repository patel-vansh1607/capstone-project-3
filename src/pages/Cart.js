import "../styles/Cart.css";
import { useCart } from "../context/CartContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const promoCodes = {
    "SAVE10": 10,
    "SHOP50": 50,
    "FREESTUFF": 100,
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount;

  const applyPromo = () => {
    const code = promoInput.toUpperCase();
    if (promoCodes[code]) {
      setPromoCode(code);
      setDiscountPercent(promoCodes[code]);
    } else {
      alert("Invalid promo code");
      setPromoCode("");
      setDiscountPercent(0);
    }
  };

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.text("Order Receipt", 14, 20);

    autoTable(doc, {
      head: [["Item", "Qty", "Price (KSh)"]],
      body: cart.map((item) => [
        item.name,
        item.quantity,
        (item.price * item.quantity).toLocaleString(),
      ]),
      startY: 30,
    });

    doc.text(`Subtotal: KSh ${subtotal.toLocaleString()}`, 14, doc.lastAutoTable.finalY + 10);
    if (discountPercent > 0) {
      doc.text(`Promo (${promoCode}): -${discountPercent}%`, 14, doc.lastAutoTable.finalY + 20);
      doc.text(`Discount: KSh ${discountAmount.toLocaleString()}`, 14, doc.lastAutoTable.finalY + 30);
    }
    doc.text(`Total: KSh ${total.toLocaleString()}`, 14, doc.lastAutoTable.finalY + 40);
    doc.save("receipt.pdf");
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
      <h2>Your Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="details">
                <h4>{item.name}</h4>
                <p>KSh {item.price} × {item.quantity}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑 Remove</button>
              </div>
              <div className="price">KSh {(item.price * item.quantity).toLocaleString()}</div>
            </div>
          ))}

          <div className="promo-area">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
            />
            <button onClick={applyPromo}>Apply</button>
          </div>

          <div className="cart-summary">
            <p>Subtotal: <strong>KSh {subtotal.toLocaleString()}</strong></p>
            {discountPercent > 0 && (
              <>
                <p>Promo <strong>{promoCode}</strong> applied: -{discountPercent}%</p>
                <p>Discount: <strong>-KSh {discountAmount.toLocaleString()}</strong></p>
              </>
            )}
            <h3>Total: <span>KSh {total.toLocaleString()}</span></h3>
            <button className="receipt-btn" onClick={downloadReceipt}>Download Receipt</button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Cart;
