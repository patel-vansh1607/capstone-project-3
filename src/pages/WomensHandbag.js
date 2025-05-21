import Footer from '../components/Footer';
import WomensHandbagsDeals from '../components/WomensHandbags/WomensHandbagsDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <WomensHandbagsDeals />
            <Footer />
        </div>
    )
}
export default Mobile;