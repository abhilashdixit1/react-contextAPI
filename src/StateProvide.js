import React ,{useContext,useReducer,createContext} from 'react';


export const StateProviderContext= createContext();

export const StateProvider=(props)=>(
    <StateProviderContext.Provider value={useReducer(props.reducer,props.initialState)}>
        {props.children}
    </StateProviderContext.Provider>
)

export const useDtateProviderValue=()=>useContext(StateProviderContext)