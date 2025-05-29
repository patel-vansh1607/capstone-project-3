import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "Mobile", image: "/public/assets/iphone-13.jpeg", path: "/electronics/mobiles" },
  { title: "Laptop", image: "/assets/tv2.png", path: "/electronics/laptops" },
  { title: "Camera", image: "/assets/tv3.png", path: "/electronics/cameras" },
  { title: "Tablets", image: "/assets/tv4.png", path: "/electronics/tablets" },
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
