import Footer from '../components/Footer';
import WomensJewelleryDeals from '../components/WomensJewellery/WomensJewelleryDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <WomensJewelleryDeals />
            <Footer />
        </div>
    )
}
export default Mobile;