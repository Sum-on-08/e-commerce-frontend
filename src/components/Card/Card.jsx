import React, { useContext } from "react";
import "./card.css";

import star from "../../photos/star.png";
import {ShopContext} from "../../context/Context"
function Card(props) {
  const { id,photo,brandName,rating,totalRating,description,price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="card">
      <img
        src={photo}
        alt="product"
        className="card-image"
        width="100%"
        height="50%"
      />

      <div className="card-info">
        <b>{brandName}</b>
        <img src={star} alt="star" className="star" />
        <span>{rating}</span>
        <span className="gray">({totalRating})</span>
      </div>

      <p className="desc">
       {description}
      </p>
      <h3 style={{ textAlign: "center" }}>₹{price}/-</h3>
      <button className="btn" onClick={() => addToCart(id)}>Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
      <button className="btn" style={{ backgroundColor: "#FFC72C" }}>
        Buy Now
      </button>
    </div>
  );
}

export default Card;
