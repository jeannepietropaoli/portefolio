import React from "react";
import "../styles/TechStack.css";
import html from "../assets/html.png";
import css from "../assets/css3.png";
import js from "../assets/js.png";
import npm from "../assets/npm.svg";
import github from "../assets/github-dark.png";
import git from "../assets/git.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind-logo.png";
import mysql from "../assets/mysql-logo.png";
import php from "../assets/php-logo.png";
import "../styles/Section.css"
import FlipCard from "./FlipCard";
import SectionArrow from "./SectionArrow";
import { useTranslation } from "react-i18next";

export default function TechStack(props) {
    const { t } = useTranslation("techstack");

    return (
        <section ref={props.reference} id="techStack" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div className="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} nextSectionRef={props.nextSectionRef} color="grey" />
                <span className="section-number">03</span>
            </div>
            <h2 className="section-title">{t("title")}</h2>
            <div className="techStack--main-content">
                <p>{t("paragraphs.p1")}</p>
                <p>{t("paragraphs.p2")}</p>
                <div className="stack-container">
                    <FlipCard name="HTML" url={html} percentage="85" />
                    <FlipCard name="CSS" url={css} percentage="85" />
                    <FlipCard name="JavaScript" url={js} percentage="70" />
                    <FlipCard name="React" url={react} percentage="70" />
                    <FlipCard name="Github" url={github} percentage="65" />
                    <FlipCard name="Git" url={git} percentage="65" />
                    <FlipCard name="npm" url={npm} percentage="70" />
                    <FlipCard name="Tailwind" url={tailwind} percentage="85" />
                    <FlipCard name="MySQL" url={mysql} percentage="40" />
                    <FlipCard name="PHP" url={php} percentage="35" />
             </div>
             <p>{t("paragraphs.p3")}</p>
            </div>
        </section>
    )
}