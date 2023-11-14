import React from "react";
import "../styles/TechStack.css";
import html from "../assets/html.png";
import css from "../assets/css3.png";
import js from "../assets/js.png";
import npm from "../assets/npm.svg";
import github from "../assets/github-dark.png";
import git from "../assets/git.png";
import react from "../assets/react.png";
import "../styles/Section.css"
import FlipCard from "./FlipCard";

export default function TechStack(props) {
    return (
        <section ref={props.reference} id="techStack" style={{"--scroll-percentage": props.scrollPercentage}}>
            <span className="section-number">03</span>
            <h2 className="section-title">Tech Stack</h2>
            <div className="techStack--main-content">
                <p>Here are the technologies I am used to.</p>
                <div class="stack-container">
                    <FlipCard name="HTML" url={html} percentage="85" />
                    <FlipCard name="CSS" url={css} percentage="70" />
                    <FlipCard name="JavaScript" url={js} percentage="70" />
                    <FlipCard name="React" url={react} percentage="50" />
                    <FlipCard name="Github" url={github} percentage="50" />
                    <FlipCard name="Git" url={git} percentage="60" />
                    <FlipCard name="npm" url={npm} percentage="60" />
             </div>
                <p>Always down for a challenge in another tech though !</p>
            </div>
        </section>
    )
}