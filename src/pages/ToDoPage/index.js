import React, {useEffect, useState} from 'react';
import Board from '../../components/Board/';
import Checkbox from '../../components/Checkbox/';
import { useLocation } from 'react-router-dom';
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
    const [tasks, setTasks] = useState([
    ]);

    // State for the new task input
    const [newTask, setNewTask] = useState('');

    // Toggle task completed state
    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
        ));
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/todos?username=${location.state?.username}`, {mode: 'cors'})
            .then(async (response) => {
                const data = await response.json();
                const newData = data.map(function(item) {
                    return {id: item.id, name: item.name, isChecked: item.is_checked}
                })
                setTasks(newData);
            })
            .catch((error) => {
                console.error("Error fetching todo data:", error);
            });
    }, [])

    // Add a new task to the list
    const addTask = () => {
        if (newTask.trim()) {
            const newTaskObject = {
                id: tasks.length + 1,
                name: newTask,
                isChecked: false
            };

            try {
                const response = fetch("http://localhost:8000/api/todos", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
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
                <div className= "inputItem">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter a new task"
                        style={{ marginRight: '10px' }}
                    />
                    <button onClick={addTask}>Add Task</button>
                </div>

                {/* Display the task list in the Board component */}
                <Board>
                    {tasks.map(task => (
                        <Checkbox key={task.id} task={task} onToggle={toggleTask} />
                    ))}
                </Board>
            </div>
        </div>
    );
};
export default ToDoPage;