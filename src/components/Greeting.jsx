import React from 'react';
import './styles.css';

const Greeting = props => {
    const { name } = props;
    
    return (
        <h1 className="h1">
            Yo, {name}! Keep on keepin' on.
        </h1>
    );
    
};

export default Greeting;