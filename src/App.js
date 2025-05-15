import './App.css';
import Footer from './components/Footer';
import MobileDeals from './components/Mobile/MobileDeals';
import Navbar from './components/Navbar';
import Navlist from './components/Navlist';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Navlist />
      <MobileDeals />
      <Footer />
    </div>
  );
}

export default App;
