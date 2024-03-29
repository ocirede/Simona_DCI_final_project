import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import './i18n'

import UserProvider from "./context/userContext.jsx";
import ArtistsProvider from "./context/artistsContext.jsx";
import EntrepreneurProvider from "./context/entrepreneurContext.jsx";

import { FormVisibilityProvider } from "./context/formVisibility.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ArtistsProvider>
          <EntrepreneurProvider>
            <FormVisibilityProvider>
              <App />
            </FormVisibilityProvider>
          </EntrepreneurProvider>
        </ArtistsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
