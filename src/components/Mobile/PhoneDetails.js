import React from "react";
import { useParams, Link } from "react-router-dom";
import phones from "../../data/phonedata";
import "../../styles/MobileDeals.css";
import { useCart } from "../CartContext";

const PhoneDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const phone = phones.find((item) => item.id === id);
  if (!phone) return <h2>Phone not found</h2>;

  const handleAddToCart = () => {
    addToCart(phone);
    alert(`${phone.name} added to cart!`);
  };

  return (
    <div className="phone-details">
      <Link to="/" className="back-link">← Back to deals</Link>
      <div className="details-container">
        <img src={`images/${phone.image}`} alt={phone.name} className="detail-image" />
        <div className="info">
          <span className="warranty">{phone.warranty}</span>
          <h2>{phone.name}</h2>
          <p>{phone.description}</p>
          <p className="detail-price">
            KSh {phone.price.toLocaleString()} 
            <span className="original">{phone.originalPrice ? `KSh ${phone.originalPrice}` : ''}</span>
            <span className="discount">{phone.discount}</span>
          </p>
          <p><strong>Brand:</strong> {phone.brand}</p>
          <p><strong>Shipping:</strong> {phone.shipping}</p>
          <button className="buy-btn" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
