import Footer from '../components/Footer';
import KidsClothingDeals from '../components/KidsClothing/KidsClothingDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <KidsClothingDeals />
            <Footer />
        </div>
    )
}
export default Mobile;