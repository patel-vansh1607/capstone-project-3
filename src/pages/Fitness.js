import Footer from '../components/Footer';
import FitnessDeals from '../components/Fitness/FitnessDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Mobile = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <FitnessDeals />
            <Footer />
        </div>
    )
}
export default Mobile;