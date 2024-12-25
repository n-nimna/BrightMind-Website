import React from "react";

export const price = [
  {
    plan: "Basic",
    price: "50",
    ptext: "Per student, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Email Support",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "90% Class Availability",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "50GB Study Materials",
      },
    ],
  },
  {
    plan: "Standard",
    price: "89",
    ptext: "Per student, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "99.5% Class Availability",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Access to Online Study Materials",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Dedicated Tutor Support",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Personal Cloud Storage for Notes",
      },
    ],
  },
  {
    plan: "Premium",
    price: "120",
    ptext: "Per student, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Unlimited Study Materials",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "100% Class Availability",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Personalized Progress Reports",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "1-on-1 Priority Support",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Access to Exclusive Webinars",
      },
    ],
  },
];

const PriceCard = () => {
  return (
    <div className="content flex mtop">
      {price.map((item, index) => (
        <div className="box shadow" key={index}>
          <div className="topbtn"></div>
          <h3>{item.plan}</h3>
          <h1>
            <span>$</span>
            {item.price}
          </h1>
          <p>{item.ptext}</p>

          <ul>
            {item.list.map((val, idx) => {
              const { icon, text, change } = val;
              return (
                <li key={idx}>
                  <label
                    style={{
                      background: change === "color" ? "#dc35451f" : "#D4C5F5",
                      color: change === "color" ? "#dc3848" : "#6636CC",
                    }}
                  >
                    {icon}
                  </label>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
          <button
            className="btn5"
            style={{
              background: item.plan === "Standard" ? "#6636CC" : "#fff",
              color: item.plan === "Standard" ? "#fff" : "#6636CC",
            }}
          >
            Start {item.plan}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
