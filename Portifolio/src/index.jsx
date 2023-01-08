import React from "react";
import Navbar from "./components/navbar.jsx";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
