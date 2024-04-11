import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppcontextProvider from './context/Appcontext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppcontextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AppcontextProvider>
);
