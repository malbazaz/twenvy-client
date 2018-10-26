const campaignsReducer = (state = [], action) =>{
    switch(action.type) {
        case 'ADD_CAMPAIGN':
            return {...state, campaigns: [state.campaigns, action.addCampaign]}
        case 'GET_CAMPAIGNS_SUCCESS':
            return  state.concat(action.campaigns)
        case 'CREATE_CAMPAIGN_SUCCESS':
            return state.concat(action.campaign)
        case 'JOIN_CAMPAIGN_SUCCESS':{
            const index = state.findIndex(campaign => campaign.id === action.campaign.id);
            return [...state.slice(0, index), action.campaign, ...state.slice(index+1)]
        }
        case 'GET_ONE_CAMPAIGN_SUCCESS':
            return state.concat(action.campaign)
        default:
            return state;
    }
}

export default campaignsReducer; 
