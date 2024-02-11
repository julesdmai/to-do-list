import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Accessing root element
// Creating root
ReactDOM.createRoot(document.getElementById('root')).render(
  // hooking our index HTML with our React app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
