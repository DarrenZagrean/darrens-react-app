
import React from 'react';
import './style.css'

const Input = ({className, type, value, onChange}) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};
export default Input;
