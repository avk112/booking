import React from 'react';

const FormAcceptation = ({message, className={}}) => {
    return (
        <div className="form-order-acceptation">
            <h3 className={`form-order-acceptation__title ${className}`}>{message}</h3>
        </div>
    );
};

export default FormAcceptation;