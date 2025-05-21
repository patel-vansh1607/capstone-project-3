import Footer from '../components/Footer';
import MobileDeals from '../components/Mobile/MobileDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <MobileDeals />
            <Footer />
        </div>
    )
}
export default Mobile;