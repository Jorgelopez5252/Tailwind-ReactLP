import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ComingSoonProvider } from "./components/ComingSoonContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComingSoonProvider>
      <App />
    </ComingSoonProvider>
  </StrictMode>,
);
