import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';
import ElectronicsPage from '../components/ElectronicsPage';

const Electronics = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <ElectronicsPage />
            <Footer />
        </div>
    )
}
export default Electronics;