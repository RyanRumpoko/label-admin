import React from "react";

const CardType4 = ({
  name,
  icon,
  label1,
  label2,
  label3,
  total1,
  total2,
  total3,
  inc1,
  inc2,
  inc3,
}) => {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-header bg-white" style={{ padding: "18px" }}>
        <div className="row">
          <div className="col-12">
            <i className={icon} />
            <span className="ms-3 fw-bold">{name}</span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div className="w-bold">{label1}</div>
          <div className="fs-5">
            Rp. <span className="fw-bold">{total1}</span>
            {inc1}
          </div>
          <div
            className="bg-white text-primary"
            style={{ borderRadius: "5px" }}
          >
            <i className="fas fa-chart-line" /> 5%
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div className="w-bold">{label2}</div>
          <div className="fs-5">
            Rp. <span className="fw-bold">{total2}</span>
            {inc2}
          </div>
          <div
            className="bg-white text-primary"
            style={{ borderRadius: "5px" }}
          >
            <i className="fas fa-chart-line" /> 5%
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="card-body">
        <div className="row d-flex align-items-center">
          <div className="w-bold">{label3}</div>
          <div className="fs-5">
            Rp. <span className="fw-bold">{total3}</span>
            {inc3}
          </div>
          <div
            className="bg-white text-primary"
            style={{ borderRadius: "5px" }}
          >
            <i className="fas fa-chart-line" /> 5%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardType4;
