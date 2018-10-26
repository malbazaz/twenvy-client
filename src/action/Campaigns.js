// export default function fetchCampaigns() {
//     return (dispatch) => {
//       dispatch({ type: 'START_ADDING_CAMPAIGNS_REQUEST' });
//       return   fetch(`http://localhost:3001/api/campaigns`)
//       .then(response => response.json())
//         .then(campaigns => dispatch({ type: 'ADD_CAMPAIGNS', campaigns }));
//     };
//   }

 export const fetchCampaigns = () =>{
   return (dispatch) => {
      return fetch('http://localhost:3001/api/campaigns')
      .then(response => response.json())
      .then(campaigns =>dispatch(setCampaigns(campaigns)) )
      .catch(error => console.log(error))
    }
  }

 export const setCampaigns = campaigns =>{
    return {
      type: 'GET_CAMPAIGNS_SUCCESS', campaigns
    }
  }

export const updateCampaignFormData = formData => {
  return {
    type:'UPDATED_DATA',formData
  }
}

export const createCampaign = campaign =>{
  return dispatch => {
    return fetch('http://localhost:3001/api/campaigns', {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({campaign: campaign})})
    .then(response => response.json())
    .then(campaign => {
      dispatch(addCampaign(campaign))
      dispatch(resetCampaignForm())
    })
    .catch(error => console.log(error))
  }
}

export const addCampaign = campaign => {
  return {
    type: 'CREATE_CAMPAIGN_SUCCESS', campaign
  }
}

export const resetCampaignForm = () =>{
  return {
    type: 'RESET_CAMPAIGN_FORM'
  }
}

export const updateCampaign = campaign => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/campaigns/${campaign.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaign })
    })
    .then(response => response.json())
    .then(campaign => {
      dispatch(joinCampaign(campaign));
    }).catch(error => console.log(error));
  };
};

export const joinCampaign = campaign => {
  return { type: 'JOIN_CAMPAIGN_SUCCESS', campaign };
};