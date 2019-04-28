//sets up the reusable  component
import React from "react";
import "./GameCard.css";

const GameCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default GameCard;