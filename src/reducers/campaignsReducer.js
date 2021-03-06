

const campaignsReducer = (state = [], action) =>{
    switch(action.type) {
        case 'ADD_CAMPAIGN':
            return {...state, campaigns: [state.campaigns, action.addCampaign]}
        case 'GET_CAMPAIGNS_SUCCESS':
            return  state.concat(action.campaigns)
        case 'CREATE_CAMPAIGN_SUCCESS':
            return state.concat(action.campaign)
            case 'FIND_CAMPAIGN_SUCCESS':{
                // debugger;
                if(state.campaign){
                    return {...state, campaign: state.campaign}
                } else{
                let index = state.findIndex(x=> x.id === action.id)
                // debugger;
                return {...state, campaign:state[index] }
                }
            }
        case 'UP_CAMPAIGN_SUCCESS':{
            // debugger;
            return {...state, campaign:{sold_qty: state.campaign.sold_qty+1}}
        }
        case 'GET_ONE_CAMPAIGN_SUCCESS':
        return  {...state, campaign: action.campaign}
        default:
            return state;
    }
}

export default campaignsReducer; 


