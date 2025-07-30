import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InitColorSchemeScript attribute="class" />
    <App />
  </StrictMode>
);
