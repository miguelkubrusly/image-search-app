import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
// import searchImages from "./api";
// import SearchBar from "./components/SearchBar";
import { StrictMode } from "react";

const el: HTMLElement = document.getElementById("root")!;

const root: Root = ReactDOM.createRoot(el);

root.render(
  <div>
    <StrictMode>
      <App />
    </StrictMode>
  </div>
);
