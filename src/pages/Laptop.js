import Footer from '../components/Footer';
import LaptopDeals from '../components/Laptop/LaptopDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <LaptopDeals />
            <Footer />
        </div>
    )
}
export default Mobile;