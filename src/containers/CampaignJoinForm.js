import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneCampaign} from '../action/Campaigns'
import CampaignCard from '../components/CampaignCard'

class CampaignForm extends Component {

      state = {
        campaignId: ''
      }
     
      handleChange = event => {
        this.setState({
          campaignId: event.target.value
        });
      }
     
      handleSubmit = event => {
        event.preventDefault()
        this.props.fetchOneCampaign(this.state.campaignId)
      }
     
      render() {
          debugger;
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
             {this.props.campaign && <CampaignCard key={this.props.campaign.id} campaign={this.props.campaign} />}
         </div>
         </div>
       );
      }
    };
    
    const mapStateToProps = state => {
        return {
            campaignId: state.campaignId
        }
    }

    export default connect(mapStateToProps,{fetchOneCampaign})(CampaignForm);