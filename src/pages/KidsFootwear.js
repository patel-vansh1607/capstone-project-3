import Footer from '../components/Footer';
import KidsFootwearDeals from '../components/KidsFootwear/KidsFootwearDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList  />
            <KidsFootwearDeals />
            <Footer />
        </div>
    )
}
export default Mobile;