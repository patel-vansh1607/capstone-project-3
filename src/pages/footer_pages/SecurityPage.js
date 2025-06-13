import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/SecurityPage.css"

const SecurityPage = () => {
    return(
        <div>
           <Navbar />
            <div className="legal-page">
            <h2>Security</h2>
            <p>At Technologia, the security of your data is our top priority.</p>
            <ul>
                <li>We use industry-standard SSL encryption for all transactions.</li>
                <li>All personal and payment information is stored securely and never shared.</li>
                <li>Our servers are regularly monitored and tested for vulnerabilities.</li>
                <li>We do not store sensitive payment information on our servers.</li>
            </ul>
            <p>For any concerns, please contact our security team at <a href="mailto:security@technologia.com">security@technologia.com</a>.</p>
            </div>
           <Footer />
        </div>
    )
}
export default SecurityPage;