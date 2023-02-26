import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages";

const App = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"*"} element={<Navigate to={"/"} />} />
  </Routes>
);

export default App;
