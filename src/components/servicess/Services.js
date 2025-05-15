import React from "react";
import "./Services.scss";
import img from "../../assets/ecosystem_integrate.jpg"

const servicesData = [
  {
    title: "Lorem, ipsum 1.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
    image: img
  },
  {
    title: "Lorem, ipsum 2.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis nulla explicabo quos hic illum...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
    image: img,
  },
  {
    title: "Lorem, ipsum 3.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis cumque repudiandae eum...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
    image: img,
  },
  {
    title: "Lorem, ipsum 3.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis cumque repudiandae eum...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum voluptates sequi quo in...",
    image: img,
  },
];

function Services() {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`parent parent-service cont-services ${index % 2 === 1 ? "grey-bg" : ""}`}
        >
          <div className={`container cont-service ${index % 2 === 1 ? "reverse" : ""}`}>
            <div className="left">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="right">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Services;
