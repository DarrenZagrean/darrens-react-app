import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserPage from './pages/Users/';
import ToDoPage from './pages/ToDoPage/'; // Ensure this matches your filename
import './App.css'; // Add this line to include basic styles

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

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to the To-Do App</h1>
      <p>An organizational tool</p>
      <div className="home-links">
        <Link to="/users" className="home-button">Go to User Page</Link>
      </div>
    </div>
  );
}


export default App;
