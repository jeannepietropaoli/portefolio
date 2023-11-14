import React from "react";
import Rating from "./Rating";
import "../styles/FlipCard.css";

export default function FlipCard(props) {
    return (
        <div className="stack--flip-card">
                    <div class="front">
                        <img src={props.url} />
                    </div>
                    <div class="back">
                        <h4>{props.name}</h4>
                        <Rating percentage={props.percentage} />
                    </div>
        </div>
    )
}