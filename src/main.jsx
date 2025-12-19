import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx' // <--- 1. Import it

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider> {/* <--- 2. Wrap App with Provider */}
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)