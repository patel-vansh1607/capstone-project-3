import Navbar from "../../components/Navbar";
import NavList from "../../components/Navlist";
import "../../styles/footer_pages/ContactPage.css"

const ContactPage = () => {
    return(
        <div>
            <Navbar />
            <NavList />
           <section className="contact-section">
            <div className="contact-left">
                <h1>Let's get <br /> in touch</h1>
                <p className="subheading">Don’t be afraid to say hello with us!</p>
                <div className="contact-info">
                <p><strong>Phone</strong><br />+2 (578)-365-379</p>
                <p><strong>Email</strong><br />hello@slabs.com</p>
                <p><strong>Office</strong><br />
                    230 Norman Street New York,<br />
                    QC (USA) H8R 1A1<br />
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">See on Google Map ↗</a>
                </p>
                </div>
            </div>

            <div className="contact-right">
                <p className="intro-message">
                Great! We’re excited to hear from you and<br />
                let’s start something special together.<br />
                Call us for any inquiry.
                </p>
                <form className="contact-form">
                <div className="form-row">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="form-row">
                    <input type="text" placeholder="Phone" required />
                    <input type="text" placeholder="Subject" required />
                </div>
                <textarea placeholder="Tell us about your interested in" rows="4" required></textarea>
                <button type="submit">Send to us</button>
                </form>
            </div>
            </section>
        </div>
    )
}
export default ContactPage;