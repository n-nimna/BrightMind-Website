import React from "react";
import Heading from "../../common/Heading";
import city1 from "@/assets/location/city-1.png";
import city2 from "@/assets/location/city-2.png";
import city3 from "@/assets/location/city-3.png";
import city4 from "@/assets/location/city-4.png";
import city5 from "@/assets/location/city-5.png";
import city6 from "@/assets/location/city-6.png";
import "./style.css";

export const location = [
  {
    id: 1,
    name: "City Center Academy",
    contact: "+011 122 133 1444",
    cover: city1,
  },
  {
    id: 2,
    name: "Uptown Knowledge Zone",
    contact: "+091 122 133 1666",
    cover: city2,
  },
  {
    id: 3,
    name: "Suburban Study Point",
    contact: "+091 122 133 1545",
    cover: city3,
  },
  {
    id: 4,
    name: "Elite Learning Corner",
    contact: "+091 122 133 1235",
    cover: city4,
  },
  {
    id: 5,
    name: "Riverfront Tutoring Hub",
    contact: "+091 122 133 1642",
    cover: city5,
  },
  {
    id: 6,
    name: "Highlands Study Center",
    contact: "+091 122 133 1909",
    cover: city6,
  },
];

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Find Classes by Location' 
          subtitle='Explore nearby learning hubs offering expert tutoring services in a variety of subjects.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt={item.name} />
                <div className='overlay'>
                  <h4>{item.name}</h4>
                  <p>
                    <label>{item.contact}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
