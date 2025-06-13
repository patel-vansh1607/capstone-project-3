import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/AboutusPage.css"

const AboutusPage = () => {
    return(
        <div>
            <Navbar />
           <div className="aboutus-container">
      <h2>About Technologia</h2>
      <p className="intro">
        Welcome to <strong>Technologia</strong>, your one-stop shop for everything trendy and affordable. 
        We’re passionate about bringing you the latest and best in electronics, fashion, home essentials, and more.
      </p>

      <div className="about-sections">
        <div className="about-box">
          <h3>Our Mission</h3>
          <p>
            Our mission is to make online shopping effortless and enjoyable for everyone. 
            We focus on quality, affordability, and a seamless user experience.
          </p>
        </div>

        <div className="about-box">
          <h3>Why Choose Us?</h3>
          <p>
            With thousands of products and top-notch customer service, we’re dedicated to helping 
            you find exactly what you need — when you need it.
          </p>
        </div>

        <div className="about-box">
          <h3>Our Promise</h3>
          <p>
            At Technologia, we believe in trust, transparency, and delivering happiness to your doorstep.
            Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
    <Footer />
        </div>
    )
}
export default AboutusPage;