import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import { FavoriteJobs } from './context/FavoritesContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FavoriteJobs>
      <App />
      </FavoriteJobs>
    </BrowserRouter>
  </React.StrictMode>,
)
