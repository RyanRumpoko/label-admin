import React from "react";
import backgroundImg from "../assets/bg.jpg";

const CardType1 = ({ date, label }) => {
  return (
    <div
      className="card p-2"
      style={{
        height: "100%",
        background: `url(${backgroundImg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="card-body">
        <div className="row text-white">
          <div className="col-12">
            <i className="fas fa-cloud-sun fa-5x"></i>
          </div>
        </div>
        <div
          className="row text-white"
          style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
          }}
        >
          <div className="fs-3">{date}</div>
          <div className="fw-bold fs-1">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default CardType1;
