import katieZaferes from "./images/katie-zaferes.png";
import weddingPhotography from "./images/wedding-photography.png";
import mountainBike from "./images/mountain-bike.png";

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\"...",
        price: 136,
        coverImg: katieZaferes, 
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? ...",
        price: 125,
        coverImg: weddingPhotography, 
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape ...",
        price: 50,
        coverImg: mountainBike, 
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
];
