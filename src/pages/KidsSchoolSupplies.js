import Footer from '../components/Footer';
import KidsSchoolSuppliesDeals from '../components/KidsSchoolSupplies/KidsSchoolSuppliesDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <KidsSchoolSuppliesDeals />
            <Footer />
        </div>
    )
}
export default Mobile;