import Footer from '../components/Footer';
import CameraDeals from '../components/Cameras/CameraDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Camera = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <CameraDeals />
            <Footer />
        </div>
    )
}
export default Camera;