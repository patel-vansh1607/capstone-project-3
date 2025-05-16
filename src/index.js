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
import { CartProvider } from './components/CartContext';

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
  }
])
root.render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// /phone/itel-a50