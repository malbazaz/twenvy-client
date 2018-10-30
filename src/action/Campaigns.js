
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

  export const fetchOneCampaign = (id) =>{
    return (dispatch) => {
       return fetch(`http://localhost:3001/api/campaigns/${id}`)
       .then(response => response.json())
       .then(campaign =>dispatch(setOneCampaign(campaign)) )
       .catch(error => console.log(error))
     }
   }
 
  export const setOneCampaign = (campaign) =>{
     return {
       type: 'GET_ONE_CAMPAIGN_SUCCESS', campaign
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

export const editCampaign = campaign => {
return  { 
type: 'UP_CAMPAIGN_SUCCESS', campaign
 }
};

export async function updateCampaign2(campaign){
campaign = {...campaign, sold_qty: campaign.sold_qty+1}
// debugger;
let response = await fetch(`http://localhost:3001/api/campaigns/${campaign.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ campaign })
})
let json = await response.json()
// debugger;
}

export const updateCampaign = campaign => {
campaign = {...campaign,sold_qty: campaign.sold_qty+1 }

  return dispatch => {
    return fetch(`http://localhost:3001/api/campaigns/${campaign.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaign })
    })
    .then(response => response.json())
  };
};
