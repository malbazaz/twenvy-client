export function fetchCampaigns() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CAMPAIGNS_REQUEST' });
      return   fetch(`http://localhost:3001/api/campaigns`)
      .then(response => response.json())
        .then(campaigns => dispatch({ type: 'ADD_CAMPAIGNS', campaigns }));
    };
  }
