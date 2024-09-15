import React from 'react';
import './style.css';  // This is where you'll define the button's styles

const Button = ({ onClick, children }) => {
    return (
        <button className="basic-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;