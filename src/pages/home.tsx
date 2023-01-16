import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <Sidebar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Home;
