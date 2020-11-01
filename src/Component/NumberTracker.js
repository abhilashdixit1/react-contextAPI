import React from 'react';
import { useDtateProviderValue } from '../StateProvide';

function NumberTracker(props) {

    const[{number},dispatch]=useDtateProviderValue();
    
    return (
        <div>
            Clone of number from dashboard{number}

        </div>
    );
}

export default NumberTracker;