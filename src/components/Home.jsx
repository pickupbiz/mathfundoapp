import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NumberComp } from "./NumberComp";
import { Tables } from "./Tabels";
import { Square } from "./Square";
import { NumSquare } from "./NumSquare";
import { TopNav } from "./TopNav";

export const Home = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/number" element={<NumberComp />} />
          <Route path="/square" element={<Square />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/numbersquare" element={<NumSquare />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};