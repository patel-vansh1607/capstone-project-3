import Footer from '../components/Footer';
import MensTShirtDeals from '../components/MensTShirt/MensTShirtDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <MensTShirtDeals />
            <Footer />
        </div>
    )
}
export default Mobile;