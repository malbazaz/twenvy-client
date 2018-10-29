import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneCampaign} from '../action/Campaigns'
import CampaignCard from '../components/CampaignCard'
import {updateCampaign} from '../action/Campaigns'
// import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {fetchCampaigns} from '../action/Campaigns'
import { timeoutsShape } from 'reactstrap';
import Title from '../components/Title'

class CampaignJoinForm extends Component {

      state = {
        campaignId: '',
        campaign: []
      }

      componentDidMount(){
        this.props.fetchCampaigns()
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
      // handleRefresh = event =>{
      //   this.setState({
      //     campaignId: '',
      //     campaign: []
      //   })
      // }

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
          debugger;
        return(
            <div class="center-div">
              <Title text="Search a Campaign" />
          <div>
            <p>Write Down the CampaignId of the Campaign you would like to See and potentially Join </p>
            <p>You can choose any number between 1 and {this.props.campaigns.length}</p>
            <form onSubmit={ (event) => this.handleSubmit(event) }>
              <p>
                <label>Campaign Number</label>
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
             {/* {this.props.campaign.campaign && <button onCllick={(event)=>this.handleRefresh(event)}>Reload</button>} */}
         </div>
         </div>
       );
      }
    };
    
    const mapStateToProps = state => {
        return ({
            campaignId: state.campaignId,
            campaign: state.campaignsReducer,
            campaigns: state.campaignsReducer
        })
    }

    export default connect(mapStateToProps,{fetchOneCampaign, updateCampaign, fetchCampaigns})(CampaignJoinForm);