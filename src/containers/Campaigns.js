import React, {Component} from 'react';
import CampaignForm from './CampaignForm'
import CampaignCard from '../components/CampaignCard'

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
export default Campaigns; 