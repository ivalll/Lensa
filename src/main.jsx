import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
      </Route>
    </Routes>
  </HashRouter>
);
