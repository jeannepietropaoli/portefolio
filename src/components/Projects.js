import React from "react";
import "../styles/Projects.css";
import "../styles/Section.css"
import cvAppScreenshot from "../assets/cv-app-screenshot.png";
import toDoListScreenshot from "../assets/to-do-list-screenshot.png";
import weatherAppScreenshot from "../assets/weather-app-screenshot.png";
import ratinWidgetVideo from "../assets/rating-widget-video.mp4";
import reactIcon from "../assets/react.png";
import Project from "./Project";
import SectionArrow from "./SectionArrow";

export default function Projects(props) {
    const projects = [
        {
            title : "Online CV builder",
            description : "An online tool to create resumes through a pre-built template. Just edit the content of each section to create yours.",
            techStack : "This project was built using React",
            liveLink : "https://online-cv-builder-app.netlify.app/",
            githubRepo : "https://github.com/jeannepietropaoli/cv-builder-v3",
            screenshot : cvAppScreenshot
        },
        {
            title : "To-do List",
            description : "Interactive to-do list app to keep track of your daily tasks in an oragnized and visual way.",
            techStack : "This project was built using JavaScript, Html and CSS",
            liveLink : "https://jeannepietropaoli.github.io/to_do_list/",
            githubRepo : "https://github.com/jeannepietropaoli/react-simple-to-do-list",
            screenshot: toDoListScreenshot,
            addOn : <a target="_blank" href="https://github.com/jeannepietropaoli/react-simple-to-do-list">
                    React version (new)
                    <img className="react-icon" src={reactIcon}></img>
                    </a>
        },
        {
            title : "Weather App",
            description : "Weather forecast website using a weather API to fetch data from all over the world. Just search your city !",
            techStack : "This project was built using JavaScript, Html and CSS",
            liveLink : "https://jeannepietropaoli.github.io/weather-app/",
            githubRepo : "https://github.com/jeannepietropaoli/weather-app",
            screenshot: weatherAppScreenshot
        },
        {
            title : "Star-rating widget",
            description : "Nice little animated star-rating widget compiling scores and using SVGs to display them.",
            techStack : "This project was built using React",
            liveLink : "http://jeannepietropaoli.github.io/stars-rating-widget/",
            githubRepo : "https://github.com/jeannepietropaoli/stars-rating-widget",
            videoshot: ratinWidgetVideo
        }
    ]
    
    return (
        <section ref={props.reference} id="projects" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div className="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} nextSectionRef={props.nextSectionRef} color="grey" />
                <span className="section-number">04</span>
            </div>
            <h2 className="section-title">Projects</h2>
            <p>Here are some of my projects ...</p>
            <p>Optimal viewing experience is on desktop for these projects. Responsive versions are in development and will be identified on each project's card when available.</p>
            <div className="projects-container">
                    {projects.map((project, index) => <Project {...project} key={index} /> )}
                </div>
        </section>
    )
}