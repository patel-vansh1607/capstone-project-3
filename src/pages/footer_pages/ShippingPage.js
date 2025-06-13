import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/ShippingPage.css"

const ShippingPage = () => {
    return(
        <div>
            <Navbar />
           <div className="info-page">
            <h2>Shipping Information</h2>
            <p>We provide reliable and fast delivery all across India:</p>
            <ul>
                <li>Free shipping on orders above ₹999</li>
                <li>Delivery Time: 2–7 business days depending on your location</li>
                <li>Real-time tracking via order page</li>
                <li>Partnered with top courier services</li>
            </ul>
            </div>
            <Footer />
        </div>
    )
}
export default ShippingPage;