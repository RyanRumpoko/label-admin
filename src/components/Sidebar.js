import React, { useState } from "react";

import imgSidebar from "../assets/bg_sidebar.png";

const Sidebar = () => {
  const [routeList] = useState([
    {
      name: "Dashboard",
      path: "/",
      icon: "fas fa-home",
      active: true,
    },
    {
      name: "Loterry",
      path: "/",
      icon: "fas fa-ticket-alt",
      active: false,
    },
    {
      name: "Report",
      path: "/",
      icon: "fas fa-chart-pie",
      active: false,
    },
    {
      name: "Super Agent",
      path: "/",
      icon: "fas fa-users",
      active: false,
    },
    {
      name: "Adjust Balance Player",
      path: "/",
      icon: "fas fa-wallet",
      active: false,
    },
    {
      name: "Invoice",
      path: "/",
      icon: "fas fa-file-invoice",
      active: false,
    },
    {
      name: "Setting",
      path: "/",
      icon: "fas fa-cog",
      active: false,
    },
  ]);
  return (
    <div
      className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"
      style={{
        background: `url(${imgSidebar}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="ms-1 fs-3 fw-bold">IX</span>
          <span className="ms-5 fs-5">ADMIN</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-auto"
          style={{ width: "100%", marginTop: "42px" }}
        >
          {routeList &&
            routeList.map((item, idx) => (
              <li className="nav-item mb-2" key={idx}>
                <a
                  href={item.path}
                  className={
                    item.active ? "nav-link active" : "nav-link text-white"
                  }
                >
                  <i className={item.icon} />{" "}
                  <span className="ms-2">{item.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
