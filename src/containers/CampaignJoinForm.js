import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneCampaign} from '../action/Campaigns'
import CampaignCard from '../components/CampaignCard'
import {updateCampaign} from '../action/Campaigns'

class CampaignJoinForm extends Component {

      state = {
        campaignId: '',
        campaign: []
      }
     
      handleChange = event => {
        this.setState({
          campaignId: event.target.value
        });
      }
     
      handleSubmit = event => {
        event.preventDefault()
        // debugger;
        this.props.fetchOneCampaign(this.state.campaignId)
      }

    //   componentDidUpdate(previousProps, previousState) {
    //     // debugger;
    //     if(previousProps.campaign.campaign){
    //       // debugger;
    //     if (previousProps.campaign.campaign.sold_qty !== this.props.campaign.campaign.sold_qty) {
    //       // debugger;
    //         this.setState({campaign: this.props.campaign.campaign})
    //     }
    //   }
    // }
     
      render() {
          // debugger;
        return(
            <div>
          <div>
            <form onSubmit={ (event) => this.handleSubmit(event) }>
              <p>
                <label>Write Down the CampaignId of the Campaign you would like to See and potentially Join </label>
                <input
              type="text"
              onChange={ (event) => this.handleChange(event) } value={ this.state.campaignId }/>
              </p>
              <input type="submit" />
           </form>
         </div>
         <div>
             {this.props.campaign.campaign && <CampaignCard key={this.props.campaign.campaign.id} campaign={this.props.campaign.campaign} />}
             {this.props.campaign.campaign && <button onClick={updateCampaign(this.props.campaign.campaign)}>Join Campaign</button>}
         </div>
         </div>
       );
      }
    };
    
    const mapStateToProps = state => {
        return ({
            campaignId: state.campaignId,
            campaign: state.campaignsReducer
        })
    }

    export default connect(mapStateToProps,{fetchOneCampaign, updateCampaign})(CampaignJoinForm);