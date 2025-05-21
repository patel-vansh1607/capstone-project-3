import Footer from '../components/Footer';
import WMachinesDeals from '../components/WMachines/WMachinesDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <WMachinesDeals />
            <Footer />
        </div>
    )
}
export default Mobile;