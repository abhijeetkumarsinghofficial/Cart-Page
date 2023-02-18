import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Cart from './Cart';
import CartList from './CartList';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <CartList />


  </React.StrictMode>
);
