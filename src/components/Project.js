import React from "react";
import liveIcon from "../assets/live.png";
import "../styles/Project.css";

export default function Project(props) {
    return (
        <div className="project">
            <div className="project--img-container">
                {props.screenshot && <img src={props.screenshot} />}
                {props.videoshot && <video src={props.videoshot} autoPlay muted loop />}
            </div>
            <div className="project--overall-container">
                <h3 className="project--title">
                    {props.title}
                </h3>
                <div className="project--description">
                    <p>{props.description}</p>
                </div>
                <div className="project--tech-aspects">
                    <div className="project--tech-stack">
                        <p>{props.techStack}</p>
                    </div>
                    <div className="project--links">
                        <a target="_blank" href={props.liveLink}>
                            Live
                            <img className="live-icon" src={liveIcon}></img>
                        </a>
                        <a target="_blank" href={props.githubRepo}>
                            Code
                            <span className="code-icon">{"</>"}</span>
                        </a>
                        {props.addOn}
                    </div>
                </div>
            </div>
        </div>
    )
}