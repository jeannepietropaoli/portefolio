import React from "react";
import "../styles/About.css";
import portrait from "../assets/portrait-paint.svg";
import "../styles/Section.css";
import SectionArrow from "./SectionArrow";

export default function About(props) {
    return (
        <section ref={props.reference} id="about" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div class="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} nextSectionRef={props.nextSectionRef} color="grey" />
                <span className="section-number">02</span>
            </div>
            <div className="about--text">
                <h2 className="section-title">About</h2>
                <div className="about--text-main">
                    <p>Hi, it's me, Jeanne, a 25 years old front-end web developer based in Quebec city.</p>
                    <p>I come from an artistic background and first studied to become a profesionnal guitar maker, kind of unusual I know !</p>
                    <p>But this first experience still serves me to this day : I learned to love well-crafted projects and practice-based learning, and try to carry on my creative side into the web-development world.</p>
                    <p>I am a passion-driven person and programming and its infinite possibilities is what keeps me learning everyday.</p>
                    <p>I can not wait to start a new project, why not with you ?</p>
                </div>
            </div>
            <div className="about--img-container">
                <img className="about--img" src={portrait} />
            </div>
        </section>
    )
}