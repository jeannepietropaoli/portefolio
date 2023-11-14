import React from "react";
import "../styles/Home.css";
import SectionArrow from "./SectionArrow";

export default function Home(props) {
    return (
        <section ref={props.reference} id="home">
            <div className="home--content">
                <h1><span className="word">JEANNE</span> <span className="word">PIETROPAOLI</span></h1>
                <h1><span className="word">FRONT</span> <span className="word">-</span> <span className="word">END</span></h1>
                <h1><span className="word">WEB</span> <span className="word">-</span> <span className="word">DEV</span></h1>
                <SectionArrow nextSectionRef={props.nextSectionRef} color="white" />
            </div>
        </section>
    )
}