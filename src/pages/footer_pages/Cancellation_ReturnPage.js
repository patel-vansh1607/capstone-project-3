import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/Cancellation_ReturnPage.css"

const Cancellation_ReturnPage = () => {
    return(
        <div>
            <Navbar />
             <div className="info-page">
                <h2>Cancellation & Returns</h2>
                <p>We want you to love your purchase. Here's our return policy:</p>
                <ul>
                    <li>Cancel orders within 12 hours of placing them</li>
                    <li>Return or exchange within 7 days of delivery</li>
                    <li>Refunds processed within 5–7 business days</li>
                    <li>Items must be unused and in original condition</li>
                </ul>
                </div>
                <Footer />
        </div>
    )
}
export default Cancellation_ReturnPage;