import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardFull } from "./screens/DashboardFull";

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <DashboardFull />
  </StrictMode>,
);
