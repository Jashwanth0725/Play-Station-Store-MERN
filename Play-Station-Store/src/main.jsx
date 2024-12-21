import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "../src/App.jsx";
import { StateProvider } from "./components/StateProvider.jsx";
import reducer, { initialState } from "./features/reducer.jsx";
// import * as serviceWorker from "./serviceWorker.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// serviceWorker.unregister();
