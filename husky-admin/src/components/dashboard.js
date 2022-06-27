import React from "react";
import logo from "../assets/1logo.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Husky-Logo" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
