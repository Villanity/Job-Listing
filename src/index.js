import React from "react";
import ReactDom from "react-dom";
import Main from "./Components/Main.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

ReactDom.render(
  <>
    <Main/>
  </>, 
  document.getElementById("root")
)