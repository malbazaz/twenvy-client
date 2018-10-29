import React, {Component} from 'react';
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {updateCampaign, joinCampaign} from '../action/Campaigns'
import {fetchOneCampaign} from '../action/Campaigns'
import {editCampaign} from '../action/Campaigns'
import {newUpdate} from '../action/Campaigns'
// import Title from '../components/Title'

class CampaignPage extends Component{ 

 

componentDidMount() {
     this.props.fetchOneCampaign(this.props.match.params.id)

}

// componentDidUpdate(previousProps, previousState) {
//     debugger;
//     if(previousProps.campaign.campaign){
//       debugger;
//     if (previousProps.campaign.campaign.sold_qty !== this.props.campaign.campaign.sold_qty) {
//       debugger;
//         this.setState({campaign: this.props.campaign.campaign})
//     }
//   }
// }
// handleClick = () =>{
//     updateCampaign(this.props.campaign.campaign)
//         this.setState({campaign: this.props.campaign.campaign})
// }

   render(){

       return(
        <div class="center-div">
        {/* why it's not working?*/}
        {this.props.campaign.campaign && <CampaignCard key={this.props.campaign.campaign.id} campaign={this.props.campaign.campaign} />}
        {this.props.campaign.campaign && <button onClick={updateCampaign(this.props.campaign.campaign)}>Join Campaign</button>}
    </div>
       )
   } 
}

const mapStateToProps = (state) => {
    
    return({
        campaign: state.campaignsReducer
    })
  };


export default connect(mapStateToProps, {newUpdate, fetchOneCampaign, updateCampaign, editCampaign})(CampaignPage); 