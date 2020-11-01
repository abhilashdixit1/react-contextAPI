import React, { useState } from 'react';
import { useDtateProviderValue } from '../StateProvide';

function Dashbaord(props) {

    const[{number},dispatch]=useDtateProviderValue()

    const increase=()=>{

        var numPlus=number+1;

        dispatch({
            type:'NUM_CHANGE',
            number:numPlus
        })

    }

    return (

        <div>
            {number}
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default Dashbaord;