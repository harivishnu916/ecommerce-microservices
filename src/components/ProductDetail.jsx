import React, { useState, useEffect } from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import "./ProductDetail.css";


function ProductDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [selectedVariant, setSelectedVariant]
    = useState("");

  useEffect(() => {

    fetch(`http://localhost:8081/products/${id}`)

      .then((res) => res.json())

      .then((data) => {

        setProduct(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, [id]);
  console.log(product);
  const addToCart = () => {


    fetch("http://localhost:8081/cart", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1

      })

    });

  };

  console.log(product);


  if (!product) {

    return <h2>Loading...</h2>;


  }

  return (

    <div className="detail-container">

      {/* LEFT SIDE IMAGE */}

      <div className="detail-image">

        <img
          src={`http://localhost:8081${product.image}`}
          alt={product.name}

        />

      </div>

      {/* RIGHT SIDE DETAILS */}

      <div className="detail-content">

        {/* TITLE */}

        <h1>
          {product.title}
        </h1>

        {/* PRICE */}

        <h2>
          ₹{product.price}
        </h2>

        {/* COMMON DETAILS */}

        {product.stock && (
          <p>
            <b>Stock:</b> {product.stock}
          </p>
        )}

        {product.brand && (
          <p>
            <b>Brand:</b> {product.brand}
          </p>
        )}

        {product.model && (
          <p>
            <b>Model:</b> {product.model}
          </p>
        )}

        {product.colour && (
          <p>
            <b>Colour:</b> {product.colour}
          </p>
        )}

        {/* LAPTOP DETAILS */}

        {product.screenSize && (
          <p>
            <b>Screen Size:</b>
            {product.screenSize}
          </p>
        )}

        {product.hardDisk && (
          <p>
            <b>Hard Disk:</b>
            {product.hardDisk}
          </p>
        )}

        {product.cpu && (
          <p>
            <b>CPU:</b>
            {product.cpu}
          </p>
        )}

        {product.ram && (
          <p>
            <b>RAM:</b>
            {product.ram}
          </p>
        )}

        {product.os && (
          <p>
            <b>OS:</b>
            {product.os}
          </p>
        )}

        {product.graphics && (
          <p>
            <b>Graphics:</b>
            {product.graphics}
          </p>
        )}

        {/* MOBILE DETAILS */}

        {product.display && (
          <p>
            <b>Display:</b>
            {product.display}
          </p>
        )}

        {product.camera && (
          <p>
            <b>Camera:</b>
            {product.camera}
          </p>
        )}

        {product.battery && (
          <p>
            <b>Battery:</b>
            {product.battery}
          </p>
        )}

        {product.processor && (
          <p>
            <b>Processor:</b>
            {product.processor}
          </p>
        )}

        {/* MOBILE VARIANTS */}

        {product.variants && (

          <div className="variant-box">

            <b>Variants:</b>

            <div>

              {product.variants
                .split(",")
                .map((v, index) => (

                  <button
                    key={index}
                    className="variant-btn"
                    onClick={() =>
                      setSelectedVariant(v)
                    }
                  >
                    {v}
                  </button>

                ))}

            </div>

            {selectedVariant && (

              <p className="selected-variant">

                Selected:
                {selectedVariant}

              </p>

            )}

          </div>

        )}

        {/* EARBUD DETAILS */}

        {product.EarPlacement && (
          <p>
            <b>Ear Placement:</b>
            {product.earPlacement}
          </p>
        )}

        {product.Impedance && (
          <p>
            <b>Impedance:</b>
            {product.impedance}
          </p>
        )}

        {/* WATCH DETAILS */}

        {product.Operating && (
          <p>
            <b>Operating System:</b>
            {product.Operating}
          </p>
        )}



        {product.WirelessCommunicationStandard && (
          <p>
            <b>Wireless:</b>
            {product.WirelessCommunicationStandard}
          </p>
        )}

        {product.GPS && (
          <p>
            <b>GPS:</b>
            {product.GPS}
          </p>
        )}

        {product.caseDiameter && (
          <p>
            <b>Case Diameter:</b>
            {product.caseDiameter}
          </p>
        )}

        {product.watchMovementType && (
          <p>
            <b>Movement Type:</b>
            {product.watchMovementType}
          </p>
        )}

        {product.caseThickness && (
          <p>
            <b>Case Thickness:</b>
            {product.caseThickness}
          </p>
        )}

        {product.bandWidth && (
          <p>
            <b>Band Width:</b>
            {product.bandWidth}
          </p>
        )}
        {product.itemWeight && (
          <p>
            <b>Item Weight:</b> {product.itemWeight}
          </p>
        )}

        {product.bandColour && (
          <p>
            <b>Band Colour:</b> {product.bandColour}
          </p>
        )}

        {product.bandMaterialType && (
          <p>
            <b>Band Material:</b> {product.bandMaterialType}
          </p>
        )}

        {product.warrantyType && (
          <p>
            <b>Warranty Type:</b> {product.warrantyType}
          </p>
        )}
        {product.connectivityTechnology && (
          <p>
            <b>Connectivity:</b> {product.connectivityTechnology}
          </p>
        )}





        {/* SPECIAL FEATURE */}

        {product.specialFeature && (
          <p>
            <b>Special Feature:</b>
            {product.specialFeature}
          </p>
        )}


        {/* DRESS DETAILS */}
        {product.neckStyle && (
          <p>
            <b>Neck Style:</b> {product.neckStyle}
          </p>
        )}

        {product.fitType && (
          <p>
            <b>Fit Type:</b> {product.fitType}
          </p>
        )}

        {product.closureType && (
          <p>
            <b>Closure Type:</b> {product.closureType}
          </p>
        )}

        {product.materialComposition && (
          <p>
            <b>Material:</b> {product.materialComposition}
          </p>
        )}

        {product.sleeveType && (
          <p>
            <b>Sleeve Type:</b> {product.sleeveType}
          </p>
        )}

        {product.style && (
          <p>
            <b>Style:</b> {product.style}
          </p>
        )}

        {product.careInstructions && (
          <p>
            <b>Care Instructions:</b> {product.careInstructions}
          </p>
        )}

        {product.countryOfOrigin && (
          <p>
            <b>Country:</b> {product.countryOfOrigin}
          </p>
        )}





        {/* BUTTONS */}

        <button
          className="buy-btn"
          onClick={() =>
            navigate("/payment", {
              state: { product }
            })
          }
        >
          Buy Now
        </button>
        <button
          className="cart-btn"
          onClick={() => {
            addToCart();
            navigate("/cart");
          }}
        >
          Add To Cart
        </button>

      </div>



    </div>
  )
}

export default ProductDetail;