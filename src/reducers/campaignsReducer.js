const campaignsReducer = (state = [], action) =>{
    switch(action.type) {
        case 'ADD_CAMPAIGN':
            return {...state, campaigns: [state.campaigns, action.addCampaign]}
        case 'GET_CAMPAIGNS_SUCCESS':
            return  state.concat(action.campaigns)
        case 'CREATE_CAMPAIGN_SUCCESS':
            return state.concat(action.campaign)
        default:
            return state;
    }
}

export default campaignsReducer; 
