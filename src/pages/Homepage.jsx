import React from 'react';
import { Link } from "react-router-dom";
import AllPerfumes from '../components/AllPerfumes';
import Cart from '../components/Cart';
import Header from '../components/Header';

const Homepage = () => {
    
  return (
   <>
  <Header />
  <div className="container py-4">
    <div className="row">
      <div className="col-lg-8">
        <AllPerfumes />
      </div>
      <div className="col-lg-3">
        <Cart />
      </div>
    </div>
  </div>
</>
  );
}

export default Homepage