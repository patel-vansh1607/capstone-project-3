import Footer from '../components/Footer';
import DiningDeals from '../components/Dining/DiningDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Camera = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <DiningDeals />
            <Footer />
        </div>
    )
}
export default Camera;