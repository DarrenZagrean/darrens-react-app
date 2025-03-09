import React, {useEffect, useState} from 'react';
import Board from '../../components/Board/';
import Checkbox from '../../components/Checkbox/';
import {useLocation} from 'react-router-dom';
import './style.css';


const ToDoPage = () => {
    const location = useLocation();
    let usernameString = ''
    if (location.state?.username) {
        usernameString = location.state?.username + "'s"
    } else {
        usernameString = 'Your'
    }
    // State for managing tasks
    const [tasks, setTasks] = useState([]);

    // State for the new task input
    const [newTask, setNewTask] = useState('');


    const toggleTask = async (taskId) => {
        const taskToUpdate = tasks.find((task) => task.id === taskId);

        if (!taskToUpdate) return;

        const updatedTask = {
            username: location.state?.username, // Get username from location state
            id: taskId, // Pass the ID of the task being updated
            is_checked: !taskToUpdate.isChecked, // Toggle the current isChecked value
        };

        try {
            // Make a PATCH request to update the task on the server
            const response = await fetch(`http://localhost:8000/api/todos`, {
                method: "PATCH",
                credentials: 'include',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updatedTask),
            });

            if (response.ok) {
                // If the update is successful, update the local state
                setTasks((prevTasks) =>
                    prevTasks.map((task) =>
                        task.id === taskId ? {...task, isChecked: updatedTask.is_checked} : task
                    )
                );
            } else {
                console.error("Failed to update task:", response.status);
                alert("Error updating task. Please try again.");
            }
        } catch (error) {
            console.error("Network error while updating task:", error);
            alert("Network error. Please try again.");
        }
    };

    useEffect(() => {
        fetch(`http://localhost:8000/api/todos?username=${location.state?.username}`, {
            credentials: 'include',
            mode: 'cors'
        })
            .then(async (response) => {
                const data = await response.json();
                const newData = data.map(function (item) {
                    return {id: item.id, name: item.name, isChecked: item.is_checked}
                })
                setTasks(newData);
            })
            .catch((error) => {
                console.error("Error fetching todo data:", error);
            });
    }, [])

    // Add a new task to the list
    const addTask = async () => {
        if (newTask.trim()) {
            const newTaskObject = {
                name: newTask,
                isChecked: false,
                username: location.state?.username,
            };

            try {
                const response = await fetch("http://localhost:8000/api/todos", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',  // Ensures cookies are sent
                    body: JSON.stringify(newTaskObject),
                });

                if (response.ok) {
                    const createdTask = response.json(); 


                    setTasks([...tasks, newTaskObject]);
                    setNewTask(''); // Clear the input after adding
                } else {
                    console.error("Failed to add task:", response.status);
                    alert("Error adding task. Please try again.");
                }
            } catch (error) {
                console.error("Network error while adding task:", error);
                alert("Network error. Please try again.");
            }
        }
    };

    return (
        <div className="todo-page">
            <h1 className="todo-title">{usernameString} To-Do List</h1>
            {/* Input for adding new tasks */}
            <div className="wrapper">
                <div className="inputItem">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter a new task"
                        style={{marginRight: '10px'}}
                    />
                    <button onClick={addTask}>Add Task</button>
                </div>

                {/* Display the task list in the Board component */}
                <Board>
                    {tasks.map(task => (
                        <Checkbox key={task.id} task={task} onToggle={toggleTask}/>
                    ))}
                </Board>
            </div>
        </div>
    );
};
export default ToDoPage;