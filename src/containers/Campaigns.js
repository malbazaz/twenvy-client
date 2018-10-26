import React, {Component} from 'react';
import CampaignForm from './CampaignForm'
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {fetchCampaigns} from '../action/Campaigns'

class Campaigns extends Component{ 

 

componentDidMount() {
this.props.fetchCampaigns()
}


   render(){

       return(
        <div>
        <h3>Campaign Components</h3>
        {this.props && this.props.campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign} />)}
    </div>
       )
   } 
}

const mapStateToProps = (state) => {
    return({
        campaigns: state.campaignsReducer
    })
}
export default connect(mapStateToProps, {fetchCampaigns})(Campaigns); 