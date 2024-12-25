import React from "react";

// Import images directly using the alias
import h1 from "@/assets/hero/h1.png";
import h2 from "@/assets/hero/h2.png";
import h3 from "@/assets/hero/h3.png";
import h4 from "@/assets/hero/h4.png";
import h6 from "@/assets/hero/h6.png";


// Define the featured data array
export const featured = [
  {
    cover: <img src={h1} alt="Personalized Tutor" />, // Use the imported image
    name: "Personalized Tutor",
    total: "100+ Tutors",
  },
  {
    cover: <img src={h2} alt="Homework Help" />, // Use the imported image
    name: "Homework Help",
    total: "Assignment assistance provided.",
  },
  {
    cover: <img src={h3} alt="Online Classes" />, // Use the imported image
    name: "Online Classes",
    total: "Flexible virtual learning",
  },
  {
    cover: <img src={h4} alt="Exam Preparation" />, // Use the imported image
    name: "Exam Preparation",
    total: "Focused test guidance.",
  },
  {
    cover: <img src={h6} alt="Skill Development" />, // Use the imported image
    name: "Skill Development",
    total: "Specialized skill workshops",
  },
];

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((item, index) => (
          <div className="box" key={index}>
            {item.cover} {/* Render the image */}
            <h4>{item.name}</h4>
            <label>{item.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
