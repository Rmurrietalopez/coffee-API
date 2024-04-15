import React from "react";
import './header.css';

const Header=()=>{
   return(
    <div className="header">
      <h1 className="tittle" >Our collection</h1>
      <div className="infocenter">
      <p className="info">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>
    </div>
   )
}

export default Header;