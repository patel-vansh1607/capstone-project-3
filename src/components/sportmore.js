import "../styles/ElectronicsPage.css"
import { useNavigate } from 'react-router-dom';

const products = [
  { title: "Books", image: "/public/assets/iphone-13.jpeg", path: "/sports,-books-more/books" },
  { title: "Fitness Equipment", image: "/assets/tv2.png", path: "/sports,-books-more/fitness-equipment" },
  { title: "Stationery", image: "/assets/tv3.png", path: "/sports,-books-more/stationery" },
  { title: "Music", image: "/assets/tv4.png", path: "/sports,-books-more/music" },
];

const SportMore = () => {
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

export default SportMore;
