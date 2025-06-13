import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/FAQPage.css"

const FAQPage = () => {
    return(
        <div>
            <Navbar />
           <div className="info-page">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
                <h4>Q: How can I track my order?</h4>
                <p>A: You can track it using the tracking link sent to your email or via the "My Orders" section.</p>
            </div>

            <div className="faq-item">
                <h4>Q: Can I change my shipping address after placing the order?</h4>
                <p>A: Contact our support team within 12 hours to update the address.</p>
            </div>

            <div className="faq-item">
                <h4>Q: What if I receive a damaged product?</h4>
                <p>A: Please share photos within 48 hours of delivery. We’ll arrange a free replacement or refund.</p>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default FAQPage;