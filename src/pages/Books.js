import Footer from '../components/Footer';
import BooksDeals from '../components/Books/BooksDeals';
import Navbar from '../components/Navbar';
import NavList from '../components/Navlist';

const Camera = () => {
    return(
        <div>
            <Navbar />
            <NavList />
            <BooksDeals />
            <Footer />
        </div>
    )
}
export default Camera;