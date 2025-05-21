import Footer from '../components/Footer';
import MensShirtDeals from '../components/MensShirt/MensShirtDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <MensShirtDeals />
            <Footer />
        </div>
    )
}
export default Mobile;