import React from 'react';
import './style.css'

const Form = ({handleSubmit, children}) => {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
