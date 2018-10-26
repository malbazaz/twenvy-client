import React, {Component} from 'react';
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {updateCampaign} from '../action/Campaigns'
import {fetchOneCampaign} from '../action/Campaigns'

class CampaignPage extends Component{ 

 

componentDidMount() {
    debugger;
    this.props.fetchOneCampaign(this.props.match.params.id)
}


   render(){
        debugger;
       return(
        <div>
        <h3>Campaign Components</h3>
        {/* why it's not working?*/}
        {this.props.campaign.campaign && <CampaignCard key={this.props.campaign.campaign.id} campaign={this.props.campaign.campaign} />}
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