import Footer from '../components/Footer';
import KidsToysDeals from '../components/KidsToys/KidsToysDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <KidsToysDeals />
            <Footer />
        </div>
    )
}
export default Mobile;