import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import { useTranslation } from "react-i18next";

export default function App() {
    console.log("App component rendered")
  const { t } = useTranslation();

  const cards = data.map(item => {
    return (
        <>
            <div>
                <h1>Hello from App</h1>
            </div>
            <h1 style={{ color: "red" }}>If you see this, App is rendering!</h1>
            <Card
                key={item.id}
                {...item}
            />
      </>
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <h1>{t('welcome_message')}</h1> 
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
  
