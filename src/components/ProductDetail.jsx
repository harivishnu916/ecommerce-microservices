import React, { useState } from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import "./ProductDetail.css";

import { products } from "./ProductList";


function ProductDetail() {

  const { id } = useParams();
    const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  const [selectedVariant, setSelectedVariant]
    = useState("");

  if (!product) {

    return <h2>Product Not Found</h2>;
  }

  return (

    <div className="detail-container">

      {/* LEFT SIDE IMAGE */}

      <div className="detail-image">

        <img
          src={product.image}
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

              {product.variants.map((v, index) => (

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
            {product.EarPlacement}
          </p>
        )}

        {product.Impedance && (
          <p>
            <b>Impedance:</b>
            {product.Impedance}
          </p>
        )}

        {/* WATCH DETAILS */}

        {product.Operating && (
          <p>
            <b>Operating System:</b>
            {product.Operating}
          </p>
        )}

        {product.connectivityTechnology && (
          <p>
            <b>Connectivity:</b>
            {product.connectivityTechnology}
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

        {product.countryOfOrigin && (
          <p>
            <b>Country:</b>
            {product.countryOfOrigin}
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

{product.Neckstyle && (
  <p>

    <b>Neck Style:</b>

    {product.Neckstyle}

  </p>
)}

{product.Fittype && (
  <p>

    <b>Fit Type:</b>

    {product.Fittype}

  </p>
)}

{product.Closuretype && (
  <p>

    <b>Closure Type:</b>

    {product.Closuretype}

  </p>
)}

{product.Materialcomposition && (
  <p>

    <b>Material:</b>

    {product.Materialcomposition}

  </p>
)}

{product.Sleevetype && (
  <p>

    <b>Sleeve Type:</b>

    {product.Sleevetype}

  </p>
)}

{product.Length && (
  <p>

    <b>Length:</b>

    {product.Length}

  </p>
)}

{product.Pattern && (
  <p>

    <b>Pattern:</b>

    {product.Pattern}

  </p>
)}

{product.Style && (
  <p>

    <b>Style:</b>

    {product.Style}

  </p>
)}

{product.Careinstructions && (
  <p>

    <b>Care Instructions:</b>

    {product.Careinstructions}

  </p>
)}

{product.CountryofOrigin && (
  <p>

    <b>Country:</b>

    {product.CountryofOrigin}

  </p>
)}

{product.DressFrontLength && (
  <p>

    <b>Dress Front Length:</b>

    {product.DressFrontLength}

  </p>
)}

{product.DressBack && (
  <p>

    <b>Dress Back:</b>

    {product.DressBack}

  </p>
)}

{product.SleevesLength && (
  <p>

    <b>Sleeves Length:</b>

    {product.SleevesLength}

  </p>
)}

{product.ShirtLength && (
  <p>

    <b>Shirt Length:</b>

    {product.ShirtLength}

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

  onClick={() =>
    navigate("/cart")
  }
>

  Add To Cart

</button>

      </div>

    </div>

  )
}

export default ProductDetail;