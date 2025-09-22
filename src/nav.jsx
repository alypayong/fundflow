import React from "react";

export default function Nav({ current = "Dashboard" }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">FundFlow</div>
        <nav>
          <a className={current === "Dashboard" ? "active" : ""} href="#">Dashboard</a>
          <a className={current === "Transactions" ? "active" : ""} href="#">Transactions</a>
          <a className={current === "Reports" ? "active" : ""} href="#">Reports</a>
        </nav>
      </div>
    </header>
  );
}
