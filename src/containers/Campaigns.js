import React, {Component} from 'react';
import CampaignForm from './CampaignForm'
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {fetchCampaigns} from '../action/Campaigns'
import Title from '../components/Title'

class Campaigns extends Component{ 

 

componentDidMount() {
this.props.fetchCampaigns()
}


   render(){

       return(
        <div class="center-div">
        <Title text="Campaigns"/>
        <br/>
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