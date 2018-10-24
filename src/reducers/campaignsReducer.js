const campaignsReducer = (states = [], action) =>{
    switch(action.type) {
        case 'SHOW_CAMPAIGN':
            return action.show
        default:
            return state;
    }
}

export default campaignsReducer; 
