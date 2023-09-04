import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { GeneratorProvider } from "../contexts/GeneratorContext";

const Router: React.FC = () => {
  return (
    <GeneratorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GeneratorProvider>
  );
};

export default Router;
