import React, {Component} from 'react';
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {updateCampaign} from '../action/Campaigns'

class Campaigns extends Component{ 

 

componentDidMount() {

}


   render(){

       return(
        <div>
        <h3>Campaign Components</h3>
        {/* why is campaigns undefined??? props and this.props both don't work*/}
        {/* <CampaignCard key={campaign.id} campaign={this.props.campaign} /> */}
         <button onClick={updateCampaign}>Join Campaign</button>
    </div>
       )
   } 
}

const mapStateToProps = (state, ownProps) => {
    return ({ campaign: state.campaignsReducer.find(campaign =>
      campaign.id === Number(ownProps.match.params.campaignId))
    });
  };



export default connect(mapStateToProps, {updateCampaign})(Campaigns); 