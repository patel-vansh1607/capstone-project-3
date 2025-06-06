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

  // Logo (Base64 preferred for reliability)
  const logoBase64 = "data:image/jpeg;base64,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";
  doc.addImage(logoBase64, "PNG", 14, 10, 40, 20); // x, y, width, height

  // Store Info
  doc.setFontSize(12);
  doc.setTextColor(40);
  doc.text("Your Store Name", 60, 15);
  doc.text("123 Main Street, Nairobi, Kenya", 60, 21);
  doc.text("Phone: +254 700 000000", 60, 27);

  // Divider line
  doc.setDrawColor(200);
  doc.line(14, 32, 196, 32);

  // Receipt Title
  doc.setFontSize(16);
  doc.setTextColor(0);
  doc.text("Order Receipt", 14, 42);

  // Items Table
  autoTable(doc, {
    head: [["Item", "Quantity", "Price (KSh)"]],
    body: cart.map((item) => [
      item.name,
      item.quantity,
      (item.price * item.quantity).toLocaleString(),
    ]),
    startY: 48,
    styles: {
      halign: "left",
    },
    headStyles: {
      fillColor: [0, 123, 255],
      textColor: 255,
      fontSize: 12,
    },
    bodyStyles: {
      fontSize: 11,
    },
  });

  const finalY = doc.lastAutoTable.finalY;

  // Summary
  doc.setFontSize(12);
  doc.setTextColor(0);

  doc.text(`Subtotal: KSh ${subtotal.toLocaleString()}`, 14, finalY + 10);

  if (discountPercent > 0) {
    doc.text(`Promo Applied (${promoCode}): -${discountPercent}%`, 14, finalY + 18);
    doc.text(`Discount: -KSh ${discountAmount.toLocaleString()}`, 14, finalY + 26);
  }

  doc.setFontSize(13);
  doc.setFont(undefined, "bold");
  doc.text(`Total: KSh ${total.toLocaleString()}`, 14, finalY + (discountPercent > 0 ? 36 : 18));

  // Footer
  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(100);
  doc.text("Thank you for shopping with us!", 14, finalY + 48);
  doc.text("Visit again: www.yourstore.com", 14, finalY + 54);

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
