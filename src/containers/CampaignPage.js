import React, {Component} from 'react';
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {updateCampaign} from '../action/Campaigns'
import {fetchOneCampaign} from '../action/Campaigns'

class CampaignPage extends Component{ 

 

componentDidMount() {
    this.props.fetchOneCampaign(this.props.state.campaign.id)
}


   render(){

       return(
        <div>
        <h3>Campaign Components</h3>
        {/* why it's not working?*/}
        {/* <CampaignCard key={campaign.id} campaign={this.props.campaign} /> */}
         <button onClick={updateCampaign}>Join Campaign</button>
    </div>
       )
   } 
}

const mapStateToProps = (state) => {
    debugger;
    return({
        campaign: state.campaignsReducer
    })
  };



export default connect(mapStateToProps, {fetchOneCampaign, updateCampaign})(CampaignPage); 