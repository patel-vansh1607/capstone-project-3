import "../styles/Products.css"
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";

const products = [
  { title: "Electronics", image: "https://i.ibb.co/xTTZBLW/s23.jpg", path: "/electronics" },
  { title: "TV & Appliances", image: "https://i.ibb.co/27RDvJLx/2.jpg", path: "/tvs-appliances" },
  { title: "Men", image: "https://i.ibb.co/DHS5n725/2.jpg", path: "/men" },
  { title: "Women", image: "/assets/tv4.png", path: "/women" },
  { title: "Baby & Kids", image: "/assets/tv2.png", path: "/baby-kids" },
  { title: "Home & Furniture", image: "/assets/tv3.png", path: "/home-furniture" },
  { title: "Sports, Book & More...", image: "/assets/tv4.png", path: "/sports,-books-more" },
  { title: "Flights", image: "/assets/tv3.png", path: "/flights" },
  { title: "Offer Zones", image: "/assets/tv4.png", path: "/offer-zone" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
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
    <Footer />
    </div>
  );
};

export default Products;
