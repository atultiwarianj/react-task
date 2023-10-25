import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Smallcard from "./Components/Smallcard";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/smallcard" element={<Smallcard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
