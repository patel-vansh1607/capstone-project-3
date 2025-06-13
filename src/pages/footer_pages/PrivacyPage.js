import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/PrivacyPage.css"

const PrivacyPage = () => {
    return(
        <div>
           <Navbar />
           <div className="legal-page">
            <h2>Privacy Policy</h2>
            <p>Technologia respects your privacy and is committed to protecting your personal data.</p>
            <ul>
                <li>We collect only necessary information such as name, email, and address to process your orders.</li>
                <li>We do not sell, rent, or share your personal data with third parties for marketing.</li>
                <li>You can access, modify, or delete your data anytime via your account settings.</li>
                <li>Cookies are used to improve your shopping experience and personalize content.</li>
            </ul>
            <p>By using our site, you agree to the terms of this Privacy Policy.</p>
            </div>
           <Footer />
        </div>
    )
}
export default PrivacyPage;