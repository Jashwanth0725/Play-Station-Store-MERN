import React from "react";
import { createRoot } from "react-dom/client";
import "../../Client/src/assets/styles/index.css";
import App from "./components/App.jsx";
import { StateProvider } from "./components/StateProvider.jsx";
import reducer, { initialState } from "./features/reducer.jsx";
import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_APP_GA_MEASUREMENT_ID;

if (measurementId) {
  ReactGA.initialize(measurementId);
  console.log("ReactGA initialize done");
} else {
  console.error("GA_MEASUREMENT_ID is not defined");
  console.log(process.env.REACT_APP_GA_MEASUREMENT_ID);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// serviceWorker.unregister();
