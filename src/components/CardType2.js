import React from "react";

const CardType2 = ({ name, date, total, color }) => {
  const backgroundColor = `card ${color} p-2 mb-2`;
  return (
    <div className={backgroundColor}>
      <div className="card-body" style={{ height: "150px" }}>
        <div className="row text-white">
          <div className="col-6">
            <div className="row">
              <div className="fw-bold">{name}</div>
              <div>{date}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="float-end">
              <i className="fas fa-users fa-3x" />
            </div>
          </div>
        </div>
        <div className="row text-white">
          <div
            className="col-6"
            style={{
              position: "absolute",
              bottom: "24px",
              left: "10px",
            }}
          >
            <span className="fw-bold fs-4">{total}</span> Players
          </div>
          <div
            className="col-6"
            style={{
              position: "absolute",
              bottom: "24px",
              right: "10px",
            }}
          >
            <div
              className="bg-white float-end text-primary px-2"
              style={{ borderRadius: "5px" }}
            >
              <i className="fas fa-chart-line" /> 5%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardType2;
