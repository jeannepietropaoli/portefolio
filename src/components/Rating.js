import React from "react";
import "../styles/Rating.css";

export default function Rating(props) {
    return (
        <div className="rating">
            <svg viewBox="0 0 36 36">
                <path
                        className="circle-background"
                        d="M18 2.0845 
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="lightgrey"
                        stroke-width="3"
                    />
                <path  // circle with a circumference of 100 - radius = circ/2pi = 100/2*3.14 = 15.9155
                    // initially starts at top left corner - here moved to the right by half the canvas, then to the bottom by (36-15.9155 *2)/2 = 2.0845
                    className="circle-progress"
                    style={{"--percentage": props.percentage}}
                    d="M18 2.0845 
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="green"
                    stroke-width="3"
                />
            </svg>
            <span className="percentage">{props.percentage}%</span>
        </div>
    )
}