import React, { useContext } from "react";
import { ShopContext } from "../../../context/Context";

const CartItem = (props) => {
    const { id,photo,brandName,rating,totalRating,description,price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
    
    <div className="description">
    <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={photo} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{}brandName</h5>
        <p class="card-text">{description}</p>
        
        <p className="card-text " > Price: ₹{price}</p>
        <div className="countHandler overflow-hidden">
          <button onClick={() => removeFromCart(id) } className="btn"> - </button>
          <input className="btn"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)} className="btn"> + </button>
        </div>
      </div>
    </div>
  </div>
</div> 
   </div>
  </div>
  )
}

export default CartItem
