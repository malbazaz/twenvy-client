const campaignsReducer = (states = [], action) =>{
    switch(action.type) {
        case 'ADD_CAMPAIGN':
            return {...state, campaigns: [state.campaigns, action.addCampaign]}
        case 'GET_CAMPAIGNS_SUCCESS':
            return action.campaigns
        default:
            return state;
    }
}

export default campaignsReducer; 
