import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import NavList from './components/NavList';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavList />
    </div>
  );
}

export default App;
