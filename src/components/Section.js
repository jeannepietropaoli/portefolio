import React from "react";
import "../styles/Section.css";

export default function Section(props) {
    return (
        <div ref={props.reference} className={`section ${props.name}`} id={props.name}>
            <h3 className="section-number">{props.sectionNumber}</h3>
            {props.children}
        </div>
    )
}