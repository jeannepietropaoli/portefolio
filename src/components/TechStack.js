import React from "react";
import "../styles/TechStack.css";
import "../styles/Section.css";

import html from "../assets/html.png";
import css from "../assets/css3.png";
import js from "../assets/js.png";
import php from "../assets/php-logo.png";
import git from "../assets/git.png";
import github from "../assets/github-dark.png";

import { useTranslation } from "react-i18next";
import FlipCard from "./FlipCard";
import SectionArrow from "./SectionArrow";

import sass from "../assets/sass.webp";
import wordpress from "../assets/wordpress.png";
import laravel from "../assets/laravel.webp";
import figma from "../assets/figma.svg";
import acf from "../assets/acf.svg";
import elementor from "../assets/elementor.jpg";

export default function TechStack(props) {
    const { t } = useTranslation("techstack");

    return (
        <section 
            ref={props.reference} 
            id="techStack"
            style={{"--scroll-percentage": props.scrollPercentage}}
        >
            <div className="section-navigation-container">
                <SectionArrow 
                    previousSectionRef={props.previousSectionRef}
                    nextSectionRef={props.nextSectionRef}
                    color="grey"
                />
                <span className="section-number">03</span>
            </div>

            <h2 className="section-title">{t("title")}</h2>

            <div className="techStack--main-content">
                <p>{t("paragraphs.p1")}</p>

                <div className="stack-category">
                    <h3>{t("stack-catg-1")}</h3>
                    <div className="stack-container">
                        <FlipCard name="HTML5" url={html} percentage="90" />
                        <FlipCard name="CSS3" url={css} percentage="90" />
                        <FlipCard name="Sass" url={sass} percentage="80" />
                        <FlipCard name="JavaScript" url={js} percentage="80" />
                    </div>
                </div>


                <div className="stack-category">
                    <h3>{t("stack-catg-2")}</h3>
                    <div className="stack-container">
                        <FlipCard name="WordPress" url={wordpress} percentage="80" />
                        <FlipCard name="Elementor" url={elementor} percentage="85" />
                        <FlipCard name="ACF" url={acf} percentage="85" />
                        <FlipCard name="PHP" url={php} percentage="65" />
                        <FlipCard name="Laravel" url={laravel} percentage="40" />
                    </div>
                </div>


                <div className="stack-category">
                    <h3>{t("stack-catg-3")}</h3>
                    <div className="stack-container">
                        <FlipCard name="Git" url={git} percentage="80" />
                        <FlipCard name="GitHub" url={github} percentage="80" />
                        <FlipCard name="Figma" url={figma} percentage="75" />
                    </div>
                </div>

                <p>{t("paragraphs.p3")}</p>
            </div>
        </section>
    )
}