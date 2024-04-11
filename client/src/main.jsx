import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import './i18n'

import '@fontsource/bungee';

import UserProvider from "./context/userContext.jsx";
import OfferProvider from "./context/OfferContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <OfferProvider>
          <App />  
        </OfferProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
