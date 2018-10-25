const campaignsReducer = (states = [], action) =>{
    switch(action.type) {
        case 'ADD_CAMPAIGN':
            return {...state, campaigns: [state.campaigns, action.addCampaign]}
        default:
            return state;
    }
}

export default campaignsReducer; 
