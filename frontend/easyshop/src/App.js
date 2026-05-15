import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;