import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState('All')

function handleOption(event){
  setSelectedCategory(() => event.target.value)
}

const updatedValues = items.filter((item) => {
  if (selectedCategory === "All") {
    return item
  } else {
    return item.category === selectedCategory}
});

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOption}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updatedValues.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
