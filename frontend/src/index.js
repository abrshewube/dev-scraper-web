
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";



import "./index.css";

import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <AuthContextProvider>
  <React.StrictMode>
    
    <App />
   
    
  </React.StrictMode>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
