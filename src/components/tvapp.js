import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "Smsart TVs", image: "/public/assets/iphone-13.jpeg", path: "/tvs-appliances/smart-tvs" },
  { title: "Refrigerator", image: "/assets/tv2.png", path: "/tvs-appliances/refrigerators" },
  { title: "Washing Machine", image: "/assets/tv3.png", path: "/tvs-appliances/washing-machines" },
  { title: "Microwave", image: "/assets/tv4.png", path: "/tvs-appliances/microwaves" },
];

const TvApp = () => {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div
          key={index}
          className="product-card"
          onClick={() => navigate(product.path)}
        >
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TvApp;
