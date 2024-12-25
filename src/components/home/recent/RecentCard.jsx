import React from "react";

// Import images
import p1 from "@/assets/list/p-1.png";
import p2 from "@/assets/list/p-2.png";
import p3 from "@/assets/list/p-7.png";
import p4 from "@/assets/list/p-4.png";
import p5 from "@/assets/list/p-5.png";
import p6 from "@/assets/list/p-6.png";

// Define the list data
export const list = [
  {
    id: 1,
    cover: p1,
    name: "Advanced Math Tutoring",
    location: "$300",
    category: "Available",
    price: "Buy Now",
    type: "Mathematics",
  },
  {
    id: 2,
    cover: p2,
    name: "Mastering Algebra Essentials",
    location: "$250",
    category: "New Class",
    price: "Buy Now",
    type: "Mathematics",
  },
  {
    id: 3,
    cover: p3,
    name: "Science Explorers",
    location: "$300",
    category: "Available",
    price: "Buy Now",
    type: "Science",
  },
  {
    id: 4,
    cover: p4,
    name: "Fluent English for All Levels",
    location: "#200",
    category: "Available",
    price: "Buy Now",
    type: "Language",
  },
  {
    id: 5,
    cover: p5,
    name: "Coding for Young Innovators",
    location: "$260",
    category: "Available",
    price: "Buy Now",
    type: "Technology",
  },
  {
    id: 6,
    cover: p6,
    name: "SAT Prep Pro Sessions",
    location: "$400",
    category: "Available",
    price: "Buy Now",
    type: "Test Preparation",
  },
];

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span
                    style={{
                      background: category === "Available" ? "#25b5791a" : "#ff98001a",
                      color: category === "Available" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  {location}
                  <label htmlFor=''>/Month</label>
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
