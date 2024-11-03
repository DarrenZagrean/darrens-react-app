import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserPage from './pages/Users/';
import ToDoPage from './pages/ToDoPage/'; // Ensure this matches your filename
import './App.css'; // Add this line to include basic styles
import HomePage from './pages/HomePage/';

function App() {
  const [username, setUsername] = useState('');//defines state
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">User Page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UserPage setUsername={setUsername} />} /> {/* Pass setUsername */}
          <Route path="/todo" element={<ToDoPage />} /> {/* Ensure this points to your ToDoPage component */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
