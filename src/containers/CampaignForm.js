import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCampaignFormData, createCampaign} from '../action/Campaigns'

class CampaignForm extends Component {

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
            <div>
                Create a Campaign
            <form onSubmit={ event => this.handleSubmit(event) }>
                <p>
                    <label>Enter the Product Id</label>
                    <input type='text' name="product_id" value={product_id} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Campaign deadline</label>
                    <input type='text' name="end_date" value={end_date} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Location</label>
                    <input type='text' name="location" value={location} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Target Quantity </label>
                    <input type='text' name="target_qty" value={target_qty} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <button type='submit' >Create a Campaign</button>
                </p>
            </form>

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