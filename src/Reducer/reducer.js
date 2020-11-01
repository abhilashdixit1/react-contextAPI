export const initialState={
    number:0
}

const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'NUM_CHANGE':
            return{
                ...state,
                number:action.number+1
            }
        default:
            return state;
    }
}

export default reducer;