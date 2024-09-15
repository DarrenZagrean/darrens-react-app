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

<<<<<<< HEAD
export default Form;
=======
export default Form;
>>>>>>> 7d22ae41a1c7afd6d6d5154060a7b50548883570
