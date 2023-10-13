import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { useAuth } from './context/AuthContext';

function App() {

  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated === true ? <Route path="/profile" element={< Profile />} /> : ''}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
