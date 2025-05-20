import { Link } from "react-router-dom";
import phones from "../../data/womenstop";
import "../../styles/MobileDeals.css";

const LaptopDeals = () => {
  return (
    <div className="deals-container">
      {phones.map((phone) => (
        <Link to={`/tops/${phone.id}`} key={phone.id} className="phone-card">
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
  );
};

export default LaptopDeals;
