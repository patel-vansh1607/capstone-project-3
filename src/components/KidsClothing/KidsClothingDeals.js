import { Link } from "react-router-dom";
import phones from "../../data/kidsclothingdata";
import "../../styles/MobileDeals.css";

const LaptopDeals = () => {
  return (
    <div className="title">
    <h2 className="sui1" >Kids Clothing Deals</h2>
    <p  className="sui2">Discover the latest kids clothing deals with exclusive discounts and offers. Shop now to save big on top brands!</p>
    <div className="deals-container">
      {phones.map((phone) => (
        <Link to={`/clothing/${phone.id}`} key={phone.id} className="phone-card">
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

export default LaptopDeals;
