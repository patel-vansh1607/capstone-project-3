import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "Beds", image: "/public/assets/iphone-13.jpeg", path: "/home-furniture/beds" },
  { title: "Sofas", image: "/assets/tv2.png", path: "/home-furniture/sofas" },
  { title: "Dining", image: "/assets/tv3.png", path: "/home-furniture/dining" },
  { title: "Curtains", image: "/assets/tv4.png", path: "/home-furniture/curtains" },
];

const HomeFun = () => {
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

export default HomeFun;
