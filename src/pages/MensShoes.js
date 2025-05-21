import Footer from '../components/Footer';
import MensShoesDeals from '../components/MensShoes/MensShoesDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <MensShoesDeals />
            <Footer />
        </div>
    )
}
export default Mobile;