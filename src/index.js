import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allfaculty from "./Allfaculty";
import FacultyDetails from "./FacultyDetails";
// import Facultydetails from "./Facultydetails";
// import Header from "./Header";
import Home from "./Home";
import Layout from "./Layout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/allfaculty" element={<Allfaculty />}></Route>
        <Route path="/Faculty/:FacultyId" element={<FacultyDetails />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
