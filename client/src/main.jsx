import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import "quill/dist/quill.snow.css"; 

import "@fontsource/bungee";

import RatingContextProvider from "./context/ratingContext.jsx";
import UserProvider from "./context/userContext.jsx";
import OfferProvider from "./context/OfferContext.jsx";

import SocketProvider from "./context/socketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RatingContextProvider>
           <OfferProvider>
             <SocketProvider>
                <App />
              </SocketProvider>
            </OfferProvider>
         </RatingContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
