import Footer from '../components/Footer';
import RefrigeratorDeals from '../components/Refrigerator/RefrigeratorDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Camera = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <RefrigeratorDeals />
            <Footer />
        </div>
    )
}
export default Camera;