import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedProducts from "./components/FeaturedProduct";
import ProductDetailPage from "./components/ProductDetailPage";
import "./App.css";
import Header from "./components/Header";
import { Outlet} from "react-router";
import { Dashboard } from "./components/Dashboard";
import Product from "./components/Product";
function App() {
  return (
    <Router>
      {/* <ProductDetailPage /> */}
      <Routes>
        <Route path="/"  element={<Product />} />
         
        <Route exact path="/product/:id"element ={< ProductDetailPage />} />
         
      </Routes>
    </Router>
  );
}
export default App;
