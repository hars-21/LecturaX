import React from "react";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <main className="main-content">
        <div className="grid-container">
          <div className="card">My Analytics</div>
          <div className="card">Check Courses</div>
          <div className="card">Live Classes</div>
          <div className="card">Doubt Solving</div>
          <div className="card">Tests and Results</div>
          <div className="card">Time-Table</div>
          <div className="card">Notifications</div>
          <div className="card">Support</div>
          <div className="card">Contact</div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
