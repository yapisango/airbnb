import React from "react";
import photoGrid from "../images/photo-grid.png"; 
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <img 
                src={photoGrid} 
                alt="Collection of online experiences"
                className="hero--photo" 
            /> 
            <h1 className="hero--header">
                {t("hero_title", "Online Experiences")}
            </h1>
            <p className="hero--text">
                {t("hero_text", "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.")}
            </p>
        </section>
    );
}
