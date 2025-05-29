import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "Clothing", image: "/public/assets/iphone-13.jpeg", path: "/baby-kids/clothing" },
  { title: "Toys", image: "/assets/tv2.png", path: "/baby-kids/toys" },
  { title: "School Supplies", image: "/assets/tv3.png", path: "/baby-kids/school-supplies" },
  { title: "Footwear", image: "/assets/tv4.png", path: "/baby-kids/footwear" },
];

const BabyKids = () => {
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

export default BabyKids;
