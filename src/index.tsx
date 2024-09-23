// import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App"

const el:HTMLElement = document.getElementById("root")!

const root:Root = ReactDOM.createRoot(el)

root.render(<App />)
