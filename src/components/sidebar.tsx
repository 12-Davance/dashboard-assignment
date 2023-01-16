import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [routes] = useState([
    { id: 1, title: "Dashboard", path: "/dashboard" },
    { id: 2, title: "Users", path: "/users" },
    { id: 3, title: "Notifications", path: "/notifications" },
    { id: 4, title: "Reports", path: "/reports" },
  ]);

  return (
    <div style={{ border: "1px solid black" }}>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
