import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import UserProvider from "./context/userContext.jsx";
import ArtistsProvider from "./context/artistsContext.jsx";
import EntrepreneurProvider from "./context/entrepreneurContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ArtistsProvider>
          <EntrepreneurProvider>
              <App />
          </EntrepreneurProvider>
        </ArtistsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
