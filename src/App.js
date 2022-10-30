import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return(
  <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/singleproduct/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    

  </Router>
  );
};

export default App;
