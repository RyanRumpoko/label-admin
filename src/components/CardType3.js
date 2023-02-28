import React from "react";

const CardType3 = ({ label }) => {
  return (
    <div className="card p-2" style={{ height: "100%" }}>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-12">
            <i className="fas fa-dollar-sign text-primary" />
            <span className="ms-3 fw-bold">{label}</span>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="text-success fw-bold">Successfull</div>
          </div>
          <div className="col-8">
            <div className="float-end">Total 49 deposit</div>
            <div className="float-end fs-5">
              Rp. <span className="fw-bold">102.282.991.</span>720
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="text-warning fw-bold">Pending</div>
          </div>
          <div className="col-8">
            <div className="float-end">Total 3 deposit</div>
            <div className="float-end fs-5">
              Rp. <span className="fw-bold">900.250.</span>180
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="text-danger fw-bold">Rejected</div>
          </div>
          <div className="col-8">
            <div className="float-end">Total 49 deposit</div>
            <div className="float-end fs-5">
              Rp. <span className="fw-bold">90.125.</span>100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardType3;
