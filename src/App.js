import './App.css';
import CompanyInfo from './components/CompanyInfo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navlist from './components/Navlist';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Navlist />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default App;
