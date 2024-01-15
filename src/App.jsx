import React from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchItems from "./Pages/SearchItems";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchItems />} />
    </Routes>
  );
};

export default App;
