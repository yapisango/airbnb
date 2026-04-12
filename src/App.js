import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  // ✅ State (separated properly)
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filtering logic (combined correctly)
  const filteredData = data.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "all" || item.category === category;

    const matchesFilter =
      (filter === "all") ||
      (filter === "online" && item.location === "Online") ||
      (filter === "available" && item.openSpots > 0);

    return matchesSearch && matchesCategory && matchesFilter;
  });

  // ✅ Dynamic categories
  const categories = ["all", ...new Set(data.map(item => item.category))];

  // ✅ Optional: cleaner labels
  const categoryLabels = {
    all: "🌍 All",
    fitness: "🏋️ Fitness",
    art: "🎨 Art"
  };

  // ✅ Cards
  const cards = filteredData.map(item => (
    <Card key={item.id} {...item} />
  ));

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <h1>{t("welcome_message")}</h1>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search experiences..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* 🏷️ CATEGORY FILTER */}
        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* 🎯 EXTRA FILTERS */}
        <div className="filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "online" ? "active" : ""}
            onClick={() => setFilter("online")}
          >
            Online
          </button>

          <button
            className={filter === "available" ? "active" : ""}
            onClick={() => setFilter("available")}
          >
            Available
          </button>

          {/* 🔁 Reset */}
          <button
            onClick={() => {
              setCategory("all");
              setFilter("all");
              setSearchTerm("");
            }}
          >
            Reset
          </button>
        </div>

        {/* 🧩 Cards */}
        <section className="cards-list">
          {cards}
        </section>

        {/* 🚫 Empty state */}
        {filteredData.length === 0 && (
          <p style={{ marginTop: "20px" }}>No results found</p>
        )}
      </div>
    </div>
  );
}