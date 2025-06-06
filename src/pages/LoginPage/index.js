import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Input/';
import Form from '../../components/Form/';
import Button from '../../components/Button/';

const LoginPage = ({ setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    const newErrors = [];
    if (!email) newErrors.push("Email is required");
    if (!password) newErrors.push("Password is required");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      fetch('http://localhost:8000/api/users/login', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
      .then(response => {
        if (response.status === 200) {
          setUsername(email);
          navigate('/todo', { state: { username: email } });
        } else if (response.status === 401) {
  setErrors(["Invalid email or password"]);
} else {
  setErrors(["Something went wrong. Please try again later."]);
}
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#D3D3D3', padding: '20px', borderRadius: '8px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Form handleSubmit={handleLoginSubmit}>
        <label>Email:
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password:
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <p>
           <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <Button type="submit">Login</Button>

        {errors.length > 0 && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {errors.map((error, index) => <p key={index}>{error}</p>)}
          </div>
        )}

        {/* Link to SignupPage */}
        <p style={{ marginTop: '10px' }}>
          No account? <Link to="/signup">Create one here</Link>
        </p>
      </Form>

    </div>
  );
};

export default LoginPage;
