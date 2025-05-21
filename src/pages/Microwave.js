import Footer from '../components/Footer';
import MicrowaveDeals from '../components/Microwave/MicrowaveDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Camera = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <MicrowaveDeals />
            <Footer />
        </div>
    )
}
export default Camera;