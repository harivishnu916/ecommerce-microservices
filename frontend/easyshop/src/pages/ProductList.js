import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import bag from "../assets/bag.jpg";
import watch from "../assets/watch.jpg";
import mobile from "../assets/mobile.jpg";
import laptop from "../assets/laptop.jpg";
import earphones from "../assets/earphones.jpg";
import earbuds from "../assets/earbuds.jpg";

/* Dress Images */
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

/* Dresses */
const dressItems = [
  { id: 1, name: "Mens wear", category: "DRESSES", price: 999, image: dress1 },
  { id: 2, name: "couple Dress", category: "DRESSES", price: 1499, image: dress2 },
  { id: 3, name: "black long frock", category: "DRESSES", price: 899, image: dress3 },
  { id: 4, name: "Womens kurta set", category: "DRESSES", price: 799, image: dress4 },
  { id: 5, name: "Long frock for women", category: "DRESSES", price: 1299, image: dress5 },
  { id: 6, name: "Stylish Dress", category: "DRESSES", price: 1399, image: dress6 },
  { id: 7, name: "Men praty wear", category: "DRESSES", price: 999, image: dress7 },
  { id: 8, name: "Modern Dress", category: "DRESSES", price: 1199, image: dress8 },
  { id: 9, name: "Elegant Dress", category: "DRESSES", price: 1599, image: dress9 },
  { id: 10, name: "Designer couple Dress", category: "DRESSES", price: 1999, image: dress10 },
];

/* Other Items */
const otherItems = [
  { id: 100, name: "Handbag", category: "ACCESSORIES", price: 1499, image: bag },
  { id: 101, name: "Watch", category: "WATCHES", price: 1999, image: watch },
  { id: 102, name: "Phone", category: "MOBILES", price: 7999, image: mobile },
  { id: 103, name: "Laptop", category: "LAPTOPS", price: 45000, image: laptop },
  { id: 104, name: "Earphones", category: "EARPHONES", price: 499, image: earphones },
  { id: 105, name: "Earbuds", category: "EARBUDS", price: 1999, image: earbuds },
];

const products = [...dressItems, ...otherItems];

function ProductList() {
  const { category } = useParams();

  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="container">
      <h2>{category}</h2>

      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;