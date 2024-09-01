import React from 'react';
import './style.css'

const Form = ({handleSubmit, children}) => {
    return (
        <div>
            <form className={'basic-form'} onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    );
};

export default Form;
