import React from "react";
import starIcon from "../images/star.png";

export default function Card({ coverImg, stats, location, title, price, openSpots, description }) {

    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img 
                src={coverImg} 
                alt={title} 
                className="card--image" 
            />

            <div className="card--stats">
                <img 
                    src={starIcon} 
                    alt="rating star" 
                    className="card--star" 
                />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>

            <p className="card--title">{title}</p>

            <p className="card--price">
                <span className="bold">From ${price}</span> / person
            </p>

            <p className="card--desc">{description}</p>
        </div>
    );
}