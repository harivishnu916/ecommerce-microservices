import React, {
  lazy,
  Suspense
} from "react";

import {
  Routes,
  Route
} from "react-router-dom";

/* NORMAL LOAD */

import ProductList from "./ProductList";

/* LAZY LOAD */

const ProductDetail = lazy(() =>
  import("./ProductDetail")
);

const PaymentPage = lazy(() =>
  import("./PaymentPage")
);

function RouterApp() {

  return (

    <Suspense
      fallback={<h1>Loading...</h1>}
    >

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

    </Suspense>

  )
}

export default RouterApp;