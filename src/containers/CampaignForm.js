import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCampaignFormData} from '../action/Campaigns'
import {createCampaign} from '../action/Campaigns'

class CampaignForm extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       product_id: 0,
    //       end_date: 0,
    //       location: '',
    //       target_qty: 0
    //     };
    //   }
    handleChange = event =>{
        const {name, value} = event.target;
        const currentFormData = Object.assign({}, this.props.formData, {
            [name]: value
        })
        this.props.updateCampaignFormData(currentFormData)
    }
       
    //   handleChange(event) {
    //     this.setState({
    //       text: event.target.value
    //     });
    //   };

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

        
    const {product_id, end_date, location, target_qty, sold_qty} = this.props.formData

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
                    <input type='text' name="end_date" value={this.state.end_date} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Location</label>
                    <input type='text' name="location" value={this.state.location} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Target Quantity </label>
                    <input type='text' name="target_qty"value={this.state.target_qty} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <input type='submit' />
                </p>
            </form>
            {this.state.text}
            </div>

        )
    }
}
// mapStateToProps = ({campaigns}) => ({campaigns})
mapStateToProps = state => {
    return {
        formData: state.formData
    }
}
// mapDispatchToProps = dispatch => {
//     return {
//       createForm: formData => dispatch({type: 'ADD_CAMPAIGN', payload: formData})
//     }
//   }

export default connect(mapStateToProps, {updateCampaignFormData})(CampaignForm) 