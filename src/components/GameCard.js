//sets up the reusable  component
import React from "react";
import "./GameCard.css";
import image from "../Cards.json"

const GameCard = props => (
    
    <div className ="container">
	<div onClick={() => props.setClicked(props.id)} className="card ">
		<div className="img-container img">
      		<img alt={props.name} src={props.image} />
    	</div>
    </div>
    </div>
    
);

export default GameCard;