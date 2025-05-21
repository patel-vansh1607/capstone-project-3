import Footer from '../components/Footer';
import MensJeansDeals from '../components/MensJeans/MensJeansDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <MensJeansDeals />
            <Footer />
        </div>
    )
}
export default Mobile;