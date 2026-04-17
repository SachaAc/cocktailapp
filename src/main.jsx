import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import { AuthContextProvider } from './context/AuthContext.jsx';
=======
>>>>>>> parent of b07d46e... login details

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
<<<<<<< HEAD
   <AuthContextProvider>
    <App />
       </AuthContextProvider>
=======
    <App />
>>>>>>> parent of b07d46e... login details
      </Router>
  </React.StrictMode>,
)
