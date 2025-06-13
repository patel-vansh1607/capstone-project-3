import './App.css';
import CompanyInfo from './components/CompanyInfo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navlist from './components/Navlist';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

function App() {
  const navigate = useNavigate();
    const items = [
    { src: 'https://i.ibb.co/23gy4MHj/1-02.jpg', route: '/flights' },
    { src: 'https://i.ibb.co/vv3RBdjx/1-03.jpg', route: '/electronics/laptops' },
    { src: 'https://i.ibb.co/8g24FTSX/1-04.jpg', route: '/electronics/mobiles' },
    { src: 'https://i.ibb.co/4nGrNj7z/1-01.jpg', route: '/baby-kids' },
    { src: 'https://i.ibb.co/yF7n9zyT/ad-05.png', route: '/tvs-appliances/smart-tvs' },
    { src: 'https://i.ibb.co/JR1TxfwC/ad-06.png', route: '/baby-kids/school-supplies' },
  ];
   const handleClick = (route) => {
    navigate(route);
  }
  return (
    <div className="App">
      <Navbar />
      <Navlist />
      <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className='mt'>technologia</span></h1>
          <p>Your one-stop shop for everything trendy and affordable.</p>
          <Link to="/products" className="cta-btn">Shop Now</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Free Shipping</h3>
          <p>Enjoy free delivery on all orders over KSh 2,000.</p>
        </div>
        <div className="feature">
          <h3>Secure Payment</h3>
          <p>We accept M-Pesa, card, and mobile wallet payments.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>Need help? Our team is always here for you.</p>
        </div>
      </section>
      <div className="promo-grid">
      {items.map((item, index) => (
        <div
          key={index}
          className="promo-item clickable"
          onClick={() => handleClick(item.route)}
        >
          <img src={item.src} alt={`Promo ${index + 1}`} className="promo-image" />
        </div>
      ))}
    </div>
      <section className="about">
        <h2>Why Shop With Us?</h2>
        <p>Technologia is built for you—the smart shopper who values quality, affordability, and convenience. Whether you’re shopping for fashion, electronics, or everyday essentials, we’ve got you covered with unbeatable deals and reliable service.</p>
        <p>Join our growing community of happy customers across Kenya and experience shopping like never before.</p>
        <p>We partner with trusted brands and manufacturers to bring you genuine, high-quality products. Our customer satisfaction rate is among the highest in the region.</p>
        <p>Enjoy a hassle-free return policy, same-day dispatch, and a user-friendly shopping experience from the comfort of your home or on the go.</p>
        <p>Our mobile app makes shopping even easier, offering personalized recommendations, flash deals, and order tracking all in one place.</p>
        <p>Looking for the latest trends in fashion? Our collections are updated weekly to make sure you're always ahead of the curve.</p>
        <p>Need to send a gift? We offer gift packaging options and delivery directly to your loved ones anywhere in Kenya.</p>
        <p>Be sure to sign up for our newsletter to get exclusive access to discounts, restocks, and VIP-only flash sales.</p>
      </section>
      </div>
      <hr className="faded-hr" />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default App;
