import katieZaferes from "./images/katie-zaferes.png";
import weddingPhotography from "./images/wedding-photography.png";
import mountainBike from "./images/mountain-bike.png";

export default [
  {
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    description: "Learn how to build resilience, discipline, and a winning mindset from an Olympic athlete.",
    price: 136,
    coverImg: katieZaferes,
    stats: {
      rating: 5.0,
      reviewCount: 6
    },
    location: "Online",
    openSpots: 0,
    category: "fitness"
  },
  {
    id: 2,
    title: "Wedding Photography Masterclass",
    description: "Master the art of capturing unforgettable wedding moments with professional techniques.",
    price: 125,
    coverImg: weddingPhotography,
    stats: {
      rating: 4.9,
      reviewCount: 30
    },
    location: "Online",
    openSpots: 12,
    category: "art"
  },
  {
    id: 3,
    title: "Mountain Biking Adventure",
    description: "Explore breathtaking trails and improve your biking skills in Norway’s scenic landscapes.",
    price: 50,
    coverImg: mountainBike,
    stats: {
      rating: 4.8,
      reviewCount: 2
    },
    location: "Norway",
    openSpots: 3,
    category: "fitness"
  }
];
