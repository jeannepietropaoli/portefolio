import React from "react";
import liveIcon from "../assets/live.png";
import "../styles/Project.css";
import { useTranslation } from "react-i18next";

export default function Project(props) {
    const { t } = useTranslation("projects");

    return (
        <div className={`project ${props.done ? "" : "project--wip"}`}>
            <div className="project--img-container">
                {props.screenshot && <img src={props.screenshot} />}
                {props.videoshot && <video src={props.videoshot} autoPlay muted loop />}
            </div>
            <div className="project--overall-container">
                <h3 className="project--title">
                    {props.title}
                </h3>
                { !props.done && <div className="project__tag">{t("tags.wip")}</div> }
                <div className="project--description">
                    <p>{props.description}</p>
                </div>
                <div className="project--tech-aspects">
                    <div className="project--tech-stack">
                        <p>{props.techStack}</p>
                    </div>
                    <div className="project--links">
                        { props.done && 
                            <a target="_blank" href={props.liveLink}>
                            Live
                            <img className="live-icon" src={liveIcon}></img>
                            </a>
                        }
                        
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