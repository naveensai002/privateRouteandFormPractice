import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/ProtectedRoute";
import Products from "./components/Products";
import ProductDetailPage from "./components/ProductDetailPage";
import FormDataPratice from "./components/FormDataPratice";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="products" element={<Products />} exact />
            <Route path="products/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <h3>Hello home page</h3>
      {/* form data testing */}
      <FormDataPratice />
    </>
  );
};

export default App;
