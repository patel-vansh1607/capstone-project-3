import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/footer_pages/CarrersPage.css"

const CarrersPage = () => {
    return(
        <div>
            <Navbar />
           <div className="career-container">
      <h2>Join Our Team at Technologia</h2>
      <p className="career-intro">
        At Technologia, we’re not just building a brand — we’re shaping the future of e-commerce. 
        Join us on our journey to innovate, grow, and make an impact.
      </p>

      <div className="career-sections">
        <div className="career-box">
          <h3>Why Work With Us?</h3>
          <p>
            We offer a dynamic and inclusive work environment where creativity is encouraged, and 
            every voice matters. Enjoy growth opportunities, flexible schedules, and a team that 
            values innovation.
          </p>
        </div>

        <div className="career-box">
          <h3>Open Positions</h3>
          <ul>
            <li><strong>Frontend Developer</strong> – React.js, Tailwind CSS, REST APIs</li>
            <li><strong>UI/UX Designer</strong> – Figma, Prototyping, User Research</li>
            <li><strong>Marketing Executive</strong> – Digital Campaigns, SEO, Branding</li>
            <li><strong>Customer Support</strong> – Chat & Email Support, CRM Tools</li>
          </ul>
        </div>

        <div className="career-box">
          <h3>Apply Now</h3>
          <p>
            Ready to be part of something exciting? Email your resume to 
            <a href="mailto:careers@technologia.com"> careers@technologia.com</a> or use the contact form 
            on our site.
          </p>
        </div>
      </div>
    </div>
    <Footer />
        </div>
    )
}
export default CarrersPage;