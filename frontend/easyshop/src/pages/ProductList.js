import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------- DRESS IMAGES ---------- */
import dress1 from "../assets/dress1.jpg";
import dress2 from "../assets/dress2.jpg";
import dress3 from "../assets/dress3.jpg";
import dress4 from "../assets/dress4.jpg";
import dress5 from "../assets/dress5.jpg";
import dress6 from "../assets/dress6.jpg";
import dress7 from "../assets/dress7.jpg";
import dress8 from "../assets/dress8.jpg";
import dress9 from "../assets/dress9.jpg";
import dress10 from "../assets/dress10.jpg";

/* ---------- BAG IMAGES ---------- */
import bag1 from "../assets/bag1.jpg";
import bag2 from "../assets/bag2.jpg";
import bag3 from "../assets/bag3.jpg";
import bag4 from "../assets/bag4.jpg";
import bag5 from "../assets/bag5.jpg";
import bag6 from "../assets/bag6.jpg";
import bag7 from "../assets/bag7.jpg";

/* ---------- WATCH IMAGES ---------- */
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";
import watch3 from "../assets/watch3.jpg";
import watch4 from "../assets/watch4.jpg";
import watch5 from "../assets/watch5.jpg";
import watch6 from "../assets/watch6.jpg";

/* ---------- MOBILE IMAGES ---------- */
import mobile1 from "../assets/mobile1.jpg";
import mobile2 from "../assets/mobile2.jpg";
import mobile3 from "../assets/mobile3.jpg";
import mobile4 from "../assets/mobile4.jpg";
import mobile5 from "../assets/mobile5.jpg";
import mobile6 from "../assets/mobile6.jpg";
import mobile7 from "../assets/mobile7.jpg";
import mobile8 from "../assets/mobile8.jpg";
import mobile9 from "../assets/mobile9.jpg";
import mobile10 from "../assets/mobile10.jpg";
import mobile11 from "../assets/mobile11.jpg";

/* ---------- LAPTOP IMAGES ---------- */
import laptop1 from "../assets/laptop1.jpg";
import laptop2 from "../assets/laptop2.jpg";
import laptop3 from "../assets/laptop3.jpg";
import laptop4 from "../assets/laptop4.jpg";
import laptop5 from "../assets/laptop5.jpg";

/* ---------- EARBUD IMAGES ---------- */
import earbud1 from "../assets/earbud1.jpg";
import earbud2 from "../assets/earbud2.jpg";
import earbud3 from "../assets/earbud3.jpg";
import earbud4 from "../assets/earbud4.jpg";
import earbud5 from "../assets/earbud5.jpg";
import earbud6 from "../assets/earbud6.jpg";
import earbud7 from "../assets/earbud7.jpg";
import earbud8 from "../assets/earbud8.jpg";

/* ---------- EARPHONE IMAGES ---------- */
import earphone1 from "../assets/earphone1.jpg";
import earphone2 from "../assets/earphone2.jpg";
import earphone3 from "../assets/earphone3.jpg";
import earphone4 from "../assets/earphone4.jpg";
import earphone5 from "../assets/earphone5.jpg";
import earphone6 from "../assets/earphone6.jpg";
import earphone7 from "../assets/earphone7.jpg";

/* ---------- DRESSES ---------- */
const dressItems = [
  { id: 1, name: "Men Suite", category: "DRESSES", price: 999, image: dress1 },
  { id: 2, name: "Couple Dress(trendy)", category: "DRESSES", price: 1299, image: dress2 },
  { id: 3, name: "Womens black long frock", category: "DRESSES", price: 899, image: dress3 },
  { id: 4, name: "Women 3 pc set", category: "DRESSES", price: 799, image: dress4 },
  { id: 5, name: "Stylish women pink frock", category: "DRESSES", price: 1499, image: dress5 },
  { id: 6, name: "Men casual wear", category: "DRESSES", price: 1399, image: dress6 },
  { id: 7, name: "Men party wear", category: "DRESSES", price: 999, image: dress7 },
  { id: 8, name: "men casual", category: "DRESSES", price: 1199, image: dress8 },
  { id: 9, name: "women trendy dress", category: "DRESSES", price: 1599, image: dress9 },
  { id: 10, name: "couple dress", category: "DRESSES", price: 1999, image: dress10 },
];

/* ---------- BAGS ---------- */
const bagItems = [
  { id: 100, name: "ladies stylish handbag", category: "BAGS", price: 799, image: bag1 },
  { id: 101, name: "Black panther school bag(blue color)", category: "BAGS", price: 999, image: bag2 },
  { id: 102, name: "light blue school bag", category: "BAGS", price: 899, image: bag3 },
  { id: 103, name: "Stylish bag", category: "BAGS", price: 1199, image: bag4 },
  { id: 104, name: "cloth bag", category: "BAGS", price: 1399, image: bag5 },
  { id: 105, name: "black bags(2pcs)", category: "BAGS", price: 1099, image: bag6 },
  { id: 106, name: "safari school/college bag", category: "BAGS", price: 1299, image: bag7 },
];

/* ---------- WATCHES ---------- */
const watchItems = [
  { id: 200, name: "mens fastrack watch", category: "WATCHES", price: 1299, image: watch1 },
  { id: 201, name: "stylish watch for men", category: "WATCHES", price: 699, image: watch2 },
  { id: 202, name: "Smart watch", category: "WATCHES", price: 1399, image: watch3 },
  { id: 203, name: "Noise smart watch", category: "WATCHES", price: 1799, image: watch4 },
  { id: 204, name: "Quartz watch for women", category: "WATCHES", price: 1999, image: watch5 },
  { id: 205, name: "Stylish watch for women", category: "WATCHES", price: 1599, image: watch6 },
];

/* ---------- MOBILES ---------- */
const mobileItems = [
  { id: 300, name: "iphone16", category: "MOBILES", price: 99999, image: mobile1 },
  { id: 301, name: "Vivo", category: "MOBILES", price: 15000, image: mobile2 },
  { id: 302, name: "one plus", category: "MOBILES", price: 19999, image: mobile3 },
  { id: 303, name: "Redmi", category: "MOBILES", price: 12999, image: mobile4 },
  { id: 304, name: "Samsung", category: "MOBILES", price: 120000, image: mobile5 },
  { id: 305, name: "Oppo", category: "MOBILES", price: 16999, image: mobile6 },
  { id: 306, name: "Moto", category: "MOBILES", price: 11999, image: mobile7 },
  { id: 307, name: "Infinix", category: "MOBILES", price: 12999, image: mobile8 },
  { id: 308, name: "Keypad phone", category: "MOBILES", price: 1999, image: mobile9 },
  { id: 309, name: "Samsung keypad phone", category: "MOBILES", price: 3999, image: mobile10 },
  { id: 310, name: "Nokia keypad phone", category: "MOBILES", price: 2999, image: mobile11 },
];

/* ---------- LAPTOPS ---------- */
const laptopItems = [
  { id: 400, name: "Lenovo", category: "LAPTOPS", price: 35000, image: laptop1 },
  { id: 401, name: "HP", category: "LAPTOPS", price: 45000, image: laptop2 },
  { id: 402, name: "ASUS gaming laptop", category: "LAPTOPS", price: 65000, image: laptop3 },
  { id: 403, name: "Macbook", category: "LAPTOPS", price: 75000, image: laptop4 },
  { id: 404, name: "Touch screen laptop", category: "LAPTOPS", price: 85000, image: laptop5 },
];

/* ---------- EARBUDS ---------- */
const earbudItems = [
  { id: 500, name: "Realme ", category: "EARBUDS", price: 999, image: earbud1 },
  { id: 501, name: "Boat", category: "EARBUDS", price: 1199, image: earbud2 },
  { id: 502, name: "Philips", category: "EARBUDS", price: 1399, image: earbud3 },
  { id: 503, name: "One plus", category: "EARBUDS", price: 1599, image: earbud4 },
  { id: 504, name: "Simple earbuds ", category: "EARBUDS", price: 1799, image: earbud5 },
  { id: 505, name: "Earbuds latest", category: "EARBUDS", price: 899, image: earbud6 },
  { id: 506, name: "Apple earpods", category: "EARBUDS", price: 5199, image: earbud7 },
  { id: 507, name: "Robotek earpods", category: "EARBUDS", price: 1099, image: earbud8 },
];

/* ---------- EARPHONES ---------- */
const earphoneItems = [
  { id: 600, name: "Earphone belkin", category: "EARPHONES", price: 299, image: earphone1 },
  { id: 601, name: "black earphones", category: "EARPHONES", price: 499, image: earphone2 },
  { id: 602, name: "red earphones", category: "EARPHONES", price: 399, image: earphone3 },
  { id: 603, name: "ambrane earphones (latest)", category: "EARPHONES", price: 599, image: earphone4 },
  { id: 604, name: "boat earphones", category: "EARPHONES", price: 1099, image: earphone5 },
  { id: 605, name: "head phones", category: "EARPHONES", price: 799, image: earphone6 },
  { id: 606, name: "philips neck band", category: "EARPHONES", price: 899, image: earphone7 },
];

/* ---------- COMBINE ---------- */
const products = [
  ...dressItems,
  ...bagItems,
  ...watchItems,
  ...mobileItems,
  ...laptopItems,
  ...earbudItems,
  ...earphoneItems,
];

function ProductList() {
  const { category } = useParams();
  
const navigate = useNavigate();
const [search, setSearch] = useState("");
  const filtered = products.filter(
  (p) =>
    p.category === category &&
    p.name.toLowerCase().includes(search.toLowerCase())
);
return (
  <div className="container">
    <h2>{category}</h2>

    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />

    <div className="product-grid">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>

    {/* ✅ ADD HERE */}
    <div className="cart-footer">
      <button className="view-cart-btn" onClick={() => navigate("/cart")}>
        View My Cart
      </button>
    </div>
  </div>
);
}

export default ProductList;