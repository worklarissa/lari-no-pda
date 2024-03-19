import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home name="Larissa"/>
    <Button title="Click me" color="yelow"/>
    <App />
    <Button title="Buscar" color="red"/>
  </React.StrictMode>,
)
