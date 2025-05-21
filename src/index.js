import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mobile from './pages/Mobile';
import Laptop from './pages/Laptop';
import PhoneDetails from './components/Mobile/PhoneDetails';
import LaptopDetails from './components/Laptop/LaptopDetails';
import CameraDetails from './components/Cameras/CameraDetails';
import TabletDetails from './components/Tablets/TabletsDetails';
import RefrigeratorDetails from './components/Refrigerator/RefrigeratorDetails';
import WMachinesDetails from './components/WMachines/WMachinesDetails';
import MicrowaveDetails from './components/Microwave/MicrowaveDetails';
import MensTShirtDetails from './components/MensTShirt/MensTShirtDetails';
import MensShirtDetails from './components/MensShirt/MensShirtDetails';
import MensJeansDetails from './components/MensJeans/MensJeansDetails';
import MensShoesDetails from './components/MensShoes/MensShoesDetails';
import WomensTopDetails from './components/WomensTop/WomensTopDetails'
import WomensDressesDetails from './components/WomensDresses/WomensDressesDetails';
import WomensJewelleryDetails from './components/WomensJewellery/WomensJewelleryDetails';
import WomensHandbagsDetails from './components/WomensHandbags/WomensHandbagsDetails';
import KidsClothingDetails from './components/KidsClothing/KidsClothingDetails';
import KidsSchoolSuppliesDetails from './components/KidsSchoolSupplies/KidsSchoolSuppliesDetails';
import KidsFootwearDetails from './components/KidsFootwear/KidsFootwearsDetails';
import KidsToysDetails from './components/KidsToys/KidsToysDetails';
import BedsDetails from './components/Beds/BedsDetails';
import TVDetails from './components/TV/TVDetails';
import SofasDetails from './components/Sofas/SofasDetails';
import DiningDetails from './components/Dining/DiningDetails';
import CurtainsDetails from './components/Curtains/CurtainsDetails';
import BooksDetails from './components/Books/BooksDetails';
import FitnessDetails from './components/Fitness/FitnessDetails';
import StationeryDetails from './components/Stationery/StationeryDetails';
import MusicDetails from './components/Music/MusicDetails';
import Camera from './pages/Camera';
import Tablet from './pages/Tablet';
import TV from './pages/TV';  
import Refrigerator from './pages/Refrigerator';
import WMachines from './pages/WMachines';
import Microwave from './pages/Microwave';
import MensTShirt from './pages/MensTShirt';
import MensShirt from './pages/MensShirt';
import MensJeans from './pages/MensJeans';
import MensShoes from './pages/MensShoes';
import WomensTop from './pages/WomensTop';
import WomensDresses from './pages/WomensDresses';
import WomensJewellery from './pages/WomenJewellery';
import WomensHandbag from './pages/WomensHandbag';
import KidsClothing from './pages/KidsClothing';
import KidsToys from './pages/KidsToys';
import KidsSchoolSupplies from './pages/KidsSchoolSupplies';
import KidsFootwear from './pages/KidsFootwear';
import Beds from './pages/Beds';
import Sofas from './pages/Sofas';
import Dining from './pages/Dining';
import Curtains from './pages/Curtains';
import Books from './pages/Books';
import Fitness from './pages/Fitness';
import Stationery from './pages/Stationery';
import Music from './pages/Music';




const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/electronics/mobiles",
    element: <Mobile />,
  },
  {
    path: "/phone/:id", 
    element: <PhoneDetails />,
  },
  {
    path: "/electronics/laptops",
    element: <Laptop />,
  },
  {
    path: "/laptops/:id", 
    element:<LaptopDetails />,
  },
  {
    path: "/electronics/cameras",
    element: <Camera />,
  },
  {
    path: "/camera/:id", 
    element:<CameraDetails />,
  },
  {
    path: "/electronics/tablets",
    element: <Tablet />,
  },
  {
    path: "/tablet/:id", 
    element:<TabletDetails />,
  },
  {
    path: "tvs-appliances/smart-tvs",
    element: <TV />,
  },
  {
    path: "/tv/:id", 
    element:<TVDetails />,
  },
  {
    path: "tvs-appliances/refrigerators",
    element: <Refrigerator />,
  },
  {
    path: "/refrigerators/:id", 
    element:<RefrigeratorDetails />,
  },
  {
    path: "/tvs-appliances/washing-machines",
    element: <WMachines />,
  },
  {
    path: "/washing-machines/:id", 
    element:<WMachinesDetails />,
  },
  {
    path: "/tvs-appliances/microwaves",
    element: <Microwave />,
  },
  {
    path: "/microwaves/:id", 
    element:<MicrowaveDetails />,
  },
  {
    path: "/men/t-shirts",
    element: <MensTShirt />,
  },
  {
    path: "/t-shirts/:id", 
    element:<MensTShirtDetails />,
  },
  {
    path: "/men/shirts",
    element: <MensShirt />,
  },
  {
    path: "/shirts/:id", 
    element:<MensShirtDetails />,
  },
  {
    path: "/men/jeans",
    element: <MensJeans />,
  },
  {
    path: "/jeans/:id", 
    element:<MensJeansDetails />,
  },
  {
    path: "/men/shoes",
    element: <MensShoes />,
  },
  {
    path: "/shoes/:id", 
    element:<MensShoesDetails />,
  },
  {
    path: "/women/tops",
    element: <WomensTop />,
  },
  {
    path: "/tops/:id", 
    element:<WomensTopDetails />,
  },
  {
    path: "/women/dresses",
    element: <WomensDresses />,
  },
  {
    path: "/dresses/:id", 
    element:<WomensDressesDetails />,
  },
  {
    path: "/women/jewelry",
    element: <WomensJewellery />,
  },
  {
    path: "/jewelry/:id", 
    element:<WomensJewelleryDetails />,
  },
  {
    path: "/women/handbags",
    element: <WomensHandbag />,
  },
  {
    path: "/handbags/:id", 
    element:<WomensHandbagsDetails />,
  },
  {
    path: "/baby-kids/clothing",
    element: <KidsClothing />,
  },
  {
    path: "/clothing/:id", 
    element:<KidsClothingDetails />,
  },
  {
    path: "/baby-kids/toys",
    element: <KidsToys />,
  },
  {
    path: "/toys/:id", 
    element:<KidsToysDetails />,
  },
  {
    path: "/baby-kids/school-supplies",
    element: <KidsSchoolSupplies />,
  },
  {
    path: "/school-supplies/:id", 
    element:<KidsSchoolSuppliesDetails />,
  },
  {
    path: "/baby-kids/footwear",
    element: <KidsFootwear />,
  },
  {
    path: "/footwear/:id", 
    element:<KidsFootwearDetails />,
  },
  {
    path: "/home-furniture/beds",
    element: <Beds />,
  },
  {
    path: "/beds/:id", 
    element:<BedsDetails />,
  },
  {
    path: "/home-furniture/sofas",
    element: <Sofas />,
  },
  {
    path: "/sofas/:id", 
    element:<SofasDetails />,
  },
  {
    path: "/home-furniture/dining",
    element: <Dining />,
  },
  {
    path: "/dining/:id", 
    element:<DiningDetails />,
  },
  {
    path: "/home-furniture/curtains",
    element: <Curtains />,
  },
  {
    path: "/curtains/:id", 
    element:<CurtainsDetails />,
  },
  {
    path: "/sports,-books-more/books",
    element: <Books />,
  },
  {
    path: "/books/:id", 
    element:<BooksDetails />,
  },
  {
    path: "/sports,-books-more/fitness-equipment",
    element: <Fitness />,
  },
  {
    path: "/fitness/:id", 
    element:<FitnessDetails />,
  },
  {
    path: "/sports,-books-more/stationery",
    element: <Stationery />,
  },
  {
    path: "/stationery/:id", 
    element:<StationeryDetails />,
  },
  {
    path: "/sports,-books-more/music",
    element: <Music />,
  },
  {
    path: "/music/:id", 
    element:<MusicDetails />,
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();