import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./components/ProductDetailPage";
import "./App.css";
import Product from "./components/Product";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/product"  element={<Product />} />
        <Route  path="/product/:id"element ={< ProductDetailPage />} />
      </Routes>
    </Router>
  );
}
export default App;
