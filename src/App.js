import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/Users/';
import ToDoPage from './pages/ToDoPage/'; // Ensure this matches your filename
import './App.css'; // Add this line to include basic styles


function App() {
  const [username, setUsername] = useState('');//defines state
  return (
    <Router>
      <div className="App">
        <nav>
        </nav>
        <Routes>
            <Route path="/" element={<LoginPage setUsername={setUsername} />} />
            <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
            <Route path="/signup" element={<UserPage setUsername={setUsername} />} />
            <Route path="/todo" element={<ToDoPage />} /> {/* Ensure this points to your ToDoPage component */}
        </Routes>
      </div>
    </Router>
  );
}



export default App;
