import React, {Component} from 'react';
import CampaignForm from './CampaignForm'
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'

class Campaigns extends Component{ 
 
   render(){
       return(
        <div>
        <h3>Campaign Components</h3>
        {this.props.campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign} />)}
        <CampaignForm />
    </div>
       )
   } 
}

const mapStateToProps = (state) => {
    return({
        campaigns: this.state.campaigns
    })
}
export default connect(mapStateToProps)(Campaigns); 