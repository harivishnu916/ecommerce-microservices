import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function ProductList() {

  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:8081/products")

      .then((res) => res.json())

      .then((data) => {

        setProducts(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  const filtered = products.filter(
    (p) =>
      (!category || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );


return (

  <>

    <Navbar />

  ``
 <div className="container">

      <h2>{category}</h2>
    

      <div className="parent">

           <input
        type="text"
        placeholder="Search products..."
          value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      </div> 
```

   

     <div className="product-grid">

  {filtered.map((p) => (

    <div
      key={p.id}
      onClick={() => navigate(`/product/${p.id}`)}
    >

      <ProductCard
        product={p}
      />

    </div>

  ))}

</div>

      <div className="cart-footer">

        <button className="view-cart-btn">
          View My Cart
        </button>

      </div>

    </div>

  </>

);
}

export default ProductList;