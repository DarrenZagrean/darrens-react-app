// src/components/UserPage.js
import React, { useState } from 'react';
import Input from "../../components/Input/Input";
import Form from '../../components/Form/Form'

// Define the UserPage component
const UserPage = () => {
    // State to store the user's name
    const [name, setName] = useState('');

    // Function to handle input changes
    const handleChange = (e) => {
        setName(e.target.value);
    };

    const onUsersResponse = (response) => {
        if (response.status === 200) {
            // Go to to-do page which is going to be build
            alert(`Hello, ${name}!`); // Shows a message with the user's name
        }
    }

    // Function to handle form submission
    const usersHandleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing;
        fetch('https://66ddf1dcf7bcc0bbdcdf77c5.mockapi.io/api/users').then(onUsersResponse)
        console.log('Request sent')
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
                    <Input className={'username-input'} type={'text'} value={name} onChange={handleChange}></Input>
                </label>

                {/*Move this to a separate input component that we can re-use*/}
                <button type="submit" style={buttonStyle}>Submit</button>
            </Form>
        </div>
    );
};

export default UserPage;
