import React from "react";
import "../styles/Projects.css";
import "../styles/Section.css"
import cvAppScreenshot from "../assets/cv-app-screenshot-v2.png";
import toDoListScreenshot from "../assets/to-do-list-screenshot.png";
import weatherAppScreenshot from "../assets/weather-app-screenshot.png";
import ratinWidgetVideo from "../assets/rating-widget-video.mp4";
import ramenAppScreenshot from "../assets/whatsoup-screenshot.jpeg";
import reactIcon from "../assets/react.png";
import Project from "./Project";
import SectionArrow from "./SectionArrow";
import { useTranslation } from "react-i18next";

export default function Projects(props) {
    const { t } = useTranslation("projects");

    const projects = [
        {
            title : t("projects.project1.title"),
            description : t("projects.project1.description"),
            techStack : t("projects.project1.techstack"),
            liveLink : "https://online-cv-builder-app.netlify.app/",
            githubRepo : "https://github.com/jeannepietropaoli/cv-builder-v3",
            screenshot : cvAppScreenshot
        },
        {
            title : t("projects.project2.title"),
            description : t("projects.project2.description"),
            techStack : t("projects.project2.techstack"),
            liveLink : "https://jeannepietropaoli.github.io/to_do_list/",
            githubRepo : "https://github.com/jeannepietropaoli/react-simple-to-do-list",
            screenshot: toDoListScreenshot,
            addOn : <a target="_blank" href="https://github.com/jeannepietropaoli/react-simple-to-do-list">
                    React version (new)
                    <img className="react-icon" src={reactIcon}></img>
                    </a>
        },
        {
            title : t("projects.project3.title"),
            description : t("projects.project3.description"),
            techStack : t("projects.project3.techstack"),
            liveLink : "https://jeannepietropaoli.github.io/weather-app/",
            githubRepo : "https://github.com/jeannepietropaoli/weather-app",
            screenshot: weatherAppScreenshot
        },
        {
            title : t("projects.project4.title"),
            description : t("projects.project4.description"),
            techStack : t("projects.project4.techstack"),
            liveLink : "http://jeannepietropaoli.github.io/stars-rating-widget/",
            githubRepo : "https://github.com/jeannepietropaoli/stars-rating-widget",
            videoshot: ratinWidgetVideo
        },
        {
            title : t("projects.project5.title"),
            description : t("projects.project5.description"),
            techStack : t("projects.project5.techstack"),
            liveLink : "https://jeannepietropaoli.github.io/Integration_web_PWA_Jeanne_Pietropaoli/",
            githubRepo : "https://github.com/jeannepietropaoli/Integration_web_PWA_Jeanne_Pietropaoli",
            screenshot: ramenAppScreenshot
        }
    ]
    
    return (
        <section ref={props.reference} id="projects" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div className="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} nextSectionRef={props.nextSectionRef} color="grey" />
                <span className="section-number">04</span>
            </div>
            <h2 className="section-title">{t("title")}</h2>
            <p>{t("paragraphs.p1")}</p>
            <div className="projects-container">
                    {projects.map((project, index) => <Project {...project} key={index} /> )}
                </div>
        </section>
    )
}