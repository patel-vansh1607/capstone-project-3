import Footer from '../components/Footer';
import WomensTopDeals from '../components/WomensTop/WomensTopDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <WomensTopDeals />
            <Footer />
        </div>
    )
}
export default Mobile;