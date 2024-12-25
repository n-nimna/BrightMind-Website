import React from "react";
import Heading from "../../common/Heading";
import "./team.css";

// Import team images
import team1 from "@/assets/customer/team-1.jpg";
import team2 from "@/assets/customer/team-2.jpg";
import team3 from "@/assets/customer/team-3.jpg";
import team4 from "@/assets/customer/team-4.jpg";
import team5 from "@/assets/customer/team-5.jpg";

export const team = [
  {
    list: "50",
    cover: team1,
    name: "Daniel Thompson",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: team2,
    name: "Emily Carter",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: team3,
    name: "Liam Johnson",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: team4,
    name: "Sophia Martinez",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: team5,
    name: "Ethan Williams",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: team5,
    name: "Olivier Brown",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
];

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Team"
            subtitle="Meet our team of highly qualified and experienced educators dedicated to helping you succeed."
          />
          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt={val.name} />
                  </div>
                  <br />
                  <h4>{val.name}</h4>
                  <ul>
                    {val.icon.map((icon, idx) => (
                      <li key={idx}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <i className="fa fa-envelope"></i> Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
