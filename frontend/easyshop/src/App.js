import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetails";
import CardPaymentPage from "./pages/CardPaymentPage";
import UpiPaymentPage from "./pages/UpiPaymentPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/card-payment" element={<CardPaymentPage />} />
        <Route path="/upi-payment" element={<UpiPaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
