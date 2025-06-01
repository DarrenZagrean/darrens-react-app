import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/Users';
import ToDoPage from './pages/ToDoPage';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage setUsername={setUsername} />} />
          <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
          <Route path="/signup" element={<UserPage setUsername={setUsername} />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
