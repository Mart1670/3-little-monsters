import React, { StrictMode } from "react";
import ReactDom, { createRoot } from "react-dom/client";
import App from "./src/App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);