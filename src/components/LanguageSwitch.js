import { changeLanguage } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitch.css";
import "../styles/index.css";

export default function LanguageSwicth() {
    const { i18n } = useTranslation();

    function switchLanguage(e) {
        const selectedLang = e.target.value;
        i18n.changeLanguage(selectedLang);
    }
   
    return (
        <div>
            <label className="hidden" htmlFor="lang">Language</label>
            <select className="dropdown" name="lang" id="lang" onChange={switchLanguage} value={i18n.language}>
                <option className="dropdown__option" value="fr">Français</option>
                <option className="dropdown__option" value="en">Anglais</option>
            </select>
        </div>
    )
}