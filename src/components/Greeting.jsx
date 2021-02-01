import React from 'react';

const Greeting = props => {
    const { name } = props;
    
    return (
        <h1>
            Yo, {name}! Keep on keepin' on.
        </h1>
    );
    
};

export default Greeting;