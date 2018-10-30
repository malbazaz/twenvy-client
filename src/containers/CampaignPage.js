import React, {Component} from 'react';
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {updateCampaign, updateCampaign2, setOneCampaign} from '../action/Campaigns'
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


handleClick = async e =>{
    e.preventDefault()
    let newOne = this.props.campaign.campaign
         debugger;
        let myhello = await updateCampaign2(this.props.campaign.campaign)
        debugger;
        let hello = await this.props.fetchOneCampaign(this.props.match.params.id)
        // this.setState({campaign: hello})
        debugger;
    

}

   render(){
    debugger;
       return(
        <div class="center-div">
        {/* why it's not working?*/}
        {this.props.campaign.campaign && <CampaignCard key={this.props.campaign.campaign.id} campaign={this.props.campaign.campaign} />}
        {this.props.campaign.campaign && <button onClick={e=>this.handleClick(e)}>Join Campaign</button>}
        {/* {this.props.campaign.campaign && editCampaign(this.props.campaign.campaign)} */}
        {/* updateCampaign2(this.props.campaign.campaign) */}
        
    </div>
       )
   } 
}

const mapStateToProps = (state) => {
    
    return({
        campaign: state.campaignsReducer
    })
  };


export default connect(mapStateToProps, {fetchOneCampaign, updateCampaign2, editCampaign, setOneCampaign} )(CampaignPage); 
