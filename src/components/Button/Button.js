import React from 'react';
import './style.css';  // This is where you'll define the button's styles

const Button = ({ onClick, children }) => {
    return (
        <div>
            <button className="basic-button" onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;