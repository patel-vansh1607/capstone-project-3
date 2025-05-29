import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "T-Shirt", image: "/public/assets/iphone-13.jpeg", path: "/men/t-shirts" },
  { title: "Shirt", image: "/assets/tv2.png", path: "/men/shirts" },
  { title: "Jeans", image: "/assets/tv3.png", path: "/men/jeans" },
  { title: "Shoes", image: "/assets/tv4.png", path: "/men/shoes" },
];

const Men = () => {
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

export default Men;
