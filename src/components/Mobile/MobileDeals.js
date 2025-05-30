import React from "react";
import { Link } from "react-router-dom";
import phones from "../../data/phonedata";
import "../../styles/MobileDeals.css";

const MobileDeals = () => {
  return (
    <div className="title">
      <h2 className="deals-title">Mobile Deals</h2>
      <p className="deals-description">Discover the latest mobile deals with exclusive discounts and offers. Shop now to save big on top brands!</p>
      <div className="deals-container">
      {phones.map((phone) => (
        <Link to={`/phone/${phone.id}`} key={phone.id} className="phone-card">
          {phone.discount && <span className="discount-badge">{phone.discount}</span>}
          <img src={phone.image} alt={phone.name} className="phone-image" />
          <h3 className="phone-name">{phone.name}</h3>
          <p className="phone-price">KSh {phone.price.toLocaleString()}</p>
          {phone.originalPrice && (
            <p className="phone-original">KSh {phone.originalPrice.toLocaleString()}</p>
          )}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default MobileDeals;
