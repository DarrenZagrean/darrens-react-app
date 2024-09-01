// src/components/UserPage.js
import React, { useState } from 'react';

// Define the UserPage component
const UserPage = () => {
  // State to store the user's name
  const [name, setName] = useState('');

  // Function to handle input changes
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    alert(`Hello, ${name}!`); // Shows a message with the user's name
  };

  const pageStyle = {
      backgroundColor: '#D3D3D3',
      padding: '20px',
      borderRadius: '8px',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      margin: 0,
  }
    const formStyle = {
        marginTop: '30px', // Adds spacing above the form
        fontSize: '29px',  // Makes the form text larger
        color: '#800000',
        fontFamily: 'comic-sans',
    };

    const inputStyle = {
        marginTop: '30px', // Adds spacing above the form
        fontSize: '29px',  // Makes the form text larger
        color: '#008000',
        fontFamily: 'arial',
    };
    
    const buttonStyle = {
        marginTop: '30px', // Adds spacing above the form
        fontSize: '29px',  // Makes the form text larger
        color: '#BC13FE',
        fontFamily: 'comic-sans',
    }


  return (
    <div style={pageStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Enter your username:
          <input
            type="text"
            value={name}
            onChange={handleChange} style={inputStyle}
          />
        </label>
        <button type="submit" style = {buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default UserPage;
