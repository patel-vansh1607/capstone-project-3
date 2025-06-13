import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/PayementsPage.css"

const PayementsPage = () => {
    return(
        <div>
            <Navbar />
           <div className="info-page">
            <h2>Payment Options</h2>
            <p>At Technologia, we support a wide range of secure payment methods:</p>
            <ul>
                <li>Credit/Debit Cards (Visa, MasterCard, RuPay)</li>
                <li>UPI ( M-Pesa, Airtel Money)</li>
                <li>Net Banking (All Major Banks)</li>
                <li>Cash on Delivery (Selected Locations)</li>
            </ul>
            <p>Your payment information is always encrypted and secure.</p>
            </div>
            <Footer />
        </div>
    )
}
export default PayementsPage;