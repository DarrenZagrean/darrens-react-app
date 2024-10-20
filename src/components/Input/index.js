
import React from 'react';
import './style.css'

const Input = ({className, type, value, onChange, ...props}) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};
export default Input;
