import React from "react";
import "../styles/Home.css";
import SectionArrow from "./SectionArrow";
import { useTranslation } from "react-i18next";

export default function Home(props) {
    const { t } = useTranslation('home');

    return (
        <section ref={props.reference} id="home">
            <div className="home--content">
                <h1><span className="word">JEANNE</span> <span className="word">PIETROPAOLI</span></h1>
                <h1><span className="word">{t("jobTitle.str1")}</span> <span className="word">-</span> <span className="word">{t("jobTitle.str2")}</span></h1>
                <h1><span className="word">{t("jobTitle.str3")}</span> <span className="word">-</span> <span className="word">{t("jobTitle.str4")}</span></h1>
                <SectionArrow nextSectionRef={props.nextSectionRef} color="white" />
            </div>
        </section>
    )
}