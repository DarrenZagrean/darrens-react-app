import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Input from "../../components/Input/";
import Form from '../../components/Form/';
import Button from "../../components/Button/";

// Define the UserPage component
const UserPage = ({ setUsername }) => { // Add setUsername as a prop
    const [name, setName] = useState('');// state to store username
    const [email,setEmail] = useState('');// state to store email
    const [password,setPassword] = useState('');// state to store password
    const [confirmPassword, setConfirmPassword] = useState('');// state to store confirm password
    const [errors, setErrors] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    // Sets username, email, password and confimr passowrd requirements.
    const validateInputs = () => {
        let newErrors = [];
        if (!/^[a-zA-Z]{3,64}$/.test(name)) {
            newErrors.push("There's an error");
        }
        
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            newErrors.push("There's an error");
        }
        
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/.test(password)) {
            newErrors.push("There's an error");
        }
        
        if (password !== confirmPassword) {
            newErrors.push("There's an error");
        }

        setErrors(newErrors);
        return newErrors.length === 0;
    };

    // Function to handle input changes
    const handleChange = (e) => {
        setName(e.target.value);
    };
    //function that creates/welcomes user
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
    if (validateInputs()) { 
    fetch(`http://127.0.0.1:8000/api/users/check_user?username=${name}`, {mode: 'cors'})
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
    }
};


    
    return (
        <div style={{ backgroundColor: '#D3D3D3', padding: '20px', borderRadius: '8px', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form handleSubmit={usersHandleSubmit}>
                <label>Username:
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Email:
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>Password:
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>Confirm Password:
                    <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <Button type="submit">Submit</Button>
                {errors.length > 0 && (
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        {errors.map((error, index) => <p key={index}>{error}</p>)}
                    </div>
                )}
            </Form>
        </div>
    );
};


export default UserPage;
