import React from "react";
import './cards.css';

const Cards=({item})=>{
   return(
    <div className="card">
      <img className="card-image" src={item.image} alt={item.name} />
      <div className="card-info">
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      {item.votes>0? <p>Rate {"\u2B50"}{item.rating}</p>: <p>no votes</p>}
      </div>
      {item.available? <p> </p> : <p className="soldOut"> Sold Out </p> }
    </div>
   )
}

export default Cards;