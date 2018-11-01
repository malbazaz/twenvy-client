import React, {Component} from 'react';
import CampaignCard from '../components/CampaignCard'
import {connect} from 'react-redux'
import {updateCampaign2, updateCampaign, setOneCampaign, findCampaign} from '../action/Campaigns'
import {fetchOneCampaign, fetchCampaigns} from '../action/Campaigns'
import {editCampaign} from '../action/Campaigns'


    class CampaignPage extends Component{ 
    
    
    
    componentDidMount() {
        debugger;
            if(this.props.campaign.length>0 && !this.props.campaign.campaign){
        debugger;
                let id = parseInt(this.props.match.params.id,10)
                debugger;
                this.props.findCampaign(id)
            }
        }
    
    
    
    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        debugger;
        if (prevProps.campaign !== this.props.campaign) {
            if(this.props.campaign.length>0 && !this.props.campaign.campaign){
                                         debugger;
                let id = parseInt(this.props.match.params.id,10)
                debugger;
                this.props.findCampaign(id)
            }
        }
      }
    
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
            {this.props.campaign.campaign && <CampaignCard key={this.props.campaign.campaign.id} campaign={this.props.campaign.campaign} />}
            {this.props.campaign.campaign && <button onClick={e=>this.handleClick(e)}>Join Campaign</button>}
        </div>
           )
       } 
    }
    
    const mapStateToProps = (state) => {
        
        return({
            campaign: state.campaignsReducer
        })
      };
  
  
    export default connect(mapStateToProps, {findCampaign, fetchCampaigns, updateCampaign, fetchOneCampaign, updateCampaign2, editCampaign, setOneCampaign} )(CampaignPage); 
  