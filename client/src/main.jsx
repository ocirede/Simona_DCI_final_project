import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import '@fontsource/bungee';


import RatingContextProvider from "./context/ratingContext.jsx";

import UserProvider from "./context/userContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>

      
         
              <RatingContextProvider>
                <App />
              </RatingContextProvider>
       

      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
