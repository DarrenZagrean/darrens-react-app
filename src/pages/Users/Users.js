import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Input from "../../components/Input/Input";
import Form from '../../components/Form/Form';
import Button from "../../components/Button/Button";

// Define the UserPage component
const UserPage = ({ setUsername }) => { // Add setUsername as a prop
    // State to store the user's name
    const [name, setName] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle input changes
    const handleChange = (e) => {
        setName(e.target.value);
    };

    const onUsersResponse = (response) => {
        if (response.status === 201) {
            alert(`${name} was created!`);
        }

        if (response.status === 204) {
            alert(`Welcome back ${name}!`);
        }

        if (response.status === 400) {
            alert(`Something went wrong!`);
        }
    }

    // Function to handle form submission
const usersHandleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    fetch('https://66ddf1dcf7bcc0bbdcdf77c5.mockapi.io/api/users')
        .then((response) => {
            onUsersResponse(response); // Ensure response is passed to this function
            if (response.status === 201 || response.status === 204 || response.status === 200) {
                setUsername(name); // Call this function if it exists
                navigate('/todo', {state: {username: name}}); // Navigate to To-Do page
            }
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        });
};


    

    const pageStyle = {
        backgroundColor: '#D3D3D3',
        padding: '20px',
        borderRadius: '8px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    };

    const buttonStyle = {
        marginTop: '30px', // Adds spacing above the form
        fontSize: '29px',  // Makes the form text larger
        color: '#BC13FE',
        fontFamily: 'comic-sans',
    }

    return (
        <div style={pageStyle}>
            <Form handleSubmit={usersHandleSubmit}>
                <label>
                    Enter your username:
                    <Input className={'username-input'} type={'text'} value={name} onChange={handleChange} />
                </label>
                <Button className={'submit-button'} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserPage;
