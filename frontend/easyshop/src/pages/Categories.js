import React from "react";
import { useNavigate } from "react-router-dom";
import "./category.css";

const categories = [
  { name: "DRESSES", image: require("../assets/dress.jpg") },
  { name: "ACCESSORIES", image: require("../assets/bag.jpg") },
  { name: "WATCHES", image: require("../assets/watch.jpg") },
  { name: "MOBILES", image: require("../assets/mobile.jpg") },
  { name: "LAPTOPS", image: require("../assets/laptop.jpg") },
  { name: "EARPHONES", image: require("../assets/earphones.jpg") },
  { name: "EARBUDS", image: require("../assets/earbuds.jpg") },
];

function Categories() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="category-container">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => handleClick(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;