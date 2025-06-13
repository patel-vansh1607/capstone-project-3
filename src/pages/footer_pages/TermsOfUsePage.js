import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/TermsOfUsePage.css"

const TermsOfUsePage = () => {
    return(
        <div>
            <Navbar />
            <div className="legal-page">
            <h2>Terms of Use</h2>
            <p>Welcome to Technologia. By accessing or using our website, you agree to be bound by the following terms and conditions:</p>
            <ul>
                <li>Users must be 18 years or older to register and make purchases.</li>
                <li>You agree not to use the site for any unlawful or fraudulent purpose.</li>
                <li>All product images and content are the property of Technologia and cannot be reused without permission.</li>
                <li>We reserve the right to cancel orders at our discretion.</li>
            </ul>
            <p>These terms may change over time. It is your responsibility to review them periodically.</p>
            </div>
            <Footer />
        </div>
    )
}
export default TermsOfUsePage;