import React from 'react';
import { useLocation } from 'react-router-dom';
const ToDoPage = () => {
    const location = useLocation();
    let usernameString = ''
    if (location.state?.username) {
        usernameString = location.state?.username + "'s"
    } else {
        usernameString = 'Your'
}
    return (
        <div>
            <h1>{usernameString} To-Do List</h1>
            {/* You'll add the actual to-do list functionality here later */}
        </div>
    );
};
export default ToDoPage;