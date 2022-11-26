import React, { useState } from "react";

function Item({ name, category }) {
  const [onCart, setOnCart] = useState(false)
  function handleClick() {
    setOnCart((onCart) => (!onCart))
  }
  const color = onCart? "purple" : "yellow";
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className="add" 
      style={{backgroundColor: color}}
      onClick={handleClick}>{onCart ? "Remove from Cart" : "Add to Cart"}
      
      </button>
    </li>
  );
}

export default Item;
