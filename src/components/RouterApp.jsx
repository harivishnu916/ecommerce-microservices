import { Routes, Route } from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import PaymentPage from "./PaymentPage";

function RouterApp() {

  return (

    <Routes>

      <Route
        path="/"
        element={<ProductList />}
      />

      <Route
        path="/:category"
        element={<ProductList />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />
      <Route
  path="/payment"
  element={<PaymentPage />}
/>

    </Routes>

  )
}

export default RouterApp;