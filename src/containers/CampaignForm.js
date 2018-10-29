import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCampaignFormData, createCampaign} from '../action/Campaigns'
import Title from '../components/Title'

class CampaignForm extends Component {


    //       handleSelect = event => {
//         var options = event.target.options;
//         var value = [];
//         for (var i = 0, l = options.length; i < l; i++) {
//           if (options[i].selected) {
//           value = options[i].value;
//     } }
//       this.setState({
//         campaignId: value
//       })

// }

    handleChange = event =>{
        const {name, value} = event.target;
        const currentFormData = Object.assign({}, this.props.formData, {
            [name]: value
        })
        this.props.updateCampaignFormData(currentFormData)
    }
       
      handleSubmit = event => {
        event.preventDefault();
        this.props.createCampaign(this.props.formData)
        this.setState({
            product_id: 0,
            end_date: 0,
            location: '',
            target_qty: 0 
        })
      }

    render() {
        
    const {product_id, end_date, location, target_qty} = this.props.formData

        return (
            <div class="center-div">
               <Title text="Create a Campaign" />
            <form onSubmit={ event => this.handleSubmit(event) }>
                <p>
                    <label><strong>Enter the Product Id</strong></label>
                    <br/>
                    <input type='text' name="product_id" value={product_id} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label><strong>Enter the Campaign deadline</strong></label>
                    <br></br>
                    <input type='text' name="end_date" value={end_date} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label><strong>Enter the Location</strong></label>
                    <br/>
                    <input type='text' name="location" value={location} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label><strong>Enter the Target Quantity</strong></label>
                    <br/>
                    <input type='text' name="target_qty" value={target_qty} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <button type='submit' >Create a Campaign</button>
                </p>
            </form>
          {/* <select>
           {this.props.campaigns && this.props.campaigns.map(campaign=> <option value={campaign.id}>{campaign.id}</option>)}
          </select> */}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        formData: state.formData
    }
}


export default connect(mapStateToProps, {updateCampaignFormData, createCampaign})(CampaignForm) 