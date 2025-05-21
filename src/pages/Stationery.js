import Footer from '../components/Footer';
import StationeryDeals from '../components/Stationery/StationeryDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Camera = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <StationeryDeals />
            <Footer />
        </div>
    )
}
export default Camera;