import Input from "../Input";
import React from 'react';


const Checkbox = ({task, onToggle}) => {
    return <div style={{
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start'
    }}>
        <Input type={"checkbox"} checked={task.isChecked} onChange={() => onToggle(task.id)}></Input>
        <span style={{textDecoration: task.isChecked ? 'line-through' : 'none'}}>{task.name}</span>
    </div>
};

export default Checkbox;
