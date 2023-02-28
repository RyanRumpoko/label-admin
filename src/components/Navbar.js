import React from "react";
import avatar from "../assets/avatar.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold fs-3 text-primary" href="/">
          Page Title
        </a>
        <div className="d-flex">
          <div
            className="btn btn-light"
            style={{ borderRadius: "40px", width: "180px", height: "40px" }}
          >
            <div className="d-flex row ">
              <div className="col-8" style={{ marginTop: "-8px" }}>
                <div className="float-start" style={{ fontSize: "12px" }}>
                  <>Credit Balance</>
                </div>
                <div
                  className="text-primary"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  Rp500.000.000
                </div>
              </div>
              <div className="col-4">
                <div className="float-end">
                  <i className="fas fa-chevron-circle-right" />
                </div>
              </div>
            </div>
          </div>
          <img
            src={avatar}
            alt="avatar1"
            className="ms-5"
            style={{ width: "40px", height: "40px", borderRadius: "100px" }}
          />
          <div className="dropdown">
            <button
              className="btn btn-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              LabelAdmin
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
