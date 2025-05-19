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
import TVDetails from './components/TV/TVDetails';
import Camera from './pages/Camera';
import Tablet from './pages/Tablet';
import TV from './pages/TV';
import Refrigerator from './pages/Refrigerator';
import WMachines from './pages/WMachines';

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