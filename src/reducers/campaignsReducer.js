const campaignsReducer = (states = [], action) =>{
    switch(action.type) {
        case 'ADD_CAMPAIGN':
            return {...state, campaigns: [state.campaigns, action.add]}
        default:
            return state;
    }
}

export default campaignsReducer; 
