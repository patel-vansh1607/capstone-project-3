import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "Tops", image: "/public/assets/iphone-13.jpeg", path: "/women/tops" },
  { title: "Dresses", image: "/assets/tv2.png", path: "/women/dresses" },
  { title: "Jwellery", image: "/assets/tv3.png", path: "/women/jewelry" },
  { title: "Handbags", image: "/assets/tv4.png", path: "/women/handbags" },
];

const Women = () => {
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

export default Women;
