import React from "react";
import './products.css';

const Products=({onFilter,onSearch})=>{
  const filterSearch=(event)=>{
    const value= event.target.value;
    onSearch(value)
  }


   return(
    <div className="container">
      <button className="products" onClick={()=>onFilter("all-items")} >Our products</button>
      <button className="products" onClick={()=>onFilter("available-items")}>Available now </button>
      <input className="SearchBar" type="text" placeholder="filter drinks"  onChange={filterSearch} />
    </div>
   )
}

export default Products;