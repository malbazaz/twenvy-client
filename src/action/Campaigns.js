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
      .then(campaigns => dispatch(setCampaigns(campaigns)))
      .catch(error => console.log(error))
    }
  }

 export const setCampaigns = campaigns =>{
    return {
      type: 'GET_CAMPAIGNS_SUCCESS', campaigns
    }
  }

export const updateCampaignFormData = formData = {
  return {
    type:'UPDATED_DATA',formData
  }
}

  