import React, {Component} from 'react'
import {connect} from 'react-redux'

class CampaignForm extends Component {
    constructor() {
        super();
        this.state = {
          product_id: 0,
          end_date: 0,
          location: '',
          target_qty: 0
        };
      }
       
      handleChange(event) {
        this.setState({
          text: event.target.value
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        this.props.createForm(this.state)
        this.setState({
            product_id: 0,
            end_date: 0,
            location: '',
            target_qty: 0 
        })
      }

    render() {
        return (
            <div>
                Create a Campaign
            <form onSubmit={ event => this.handleSubmit(event) }>
                <p>
                    <label>Enter the Product Id</label>
                    <input type='text' value={this.state.productId} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Campaign deadline</label>
                    <input type='text' value={this.state.end_date} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Location</label>
                    <input type='text' value={this.state.location} onChange={(event) => this.handleChange(event)}/>
                </p>
                <p>
                    <label>Enter the Target Quantity </label>
                    <input type='text' value={this.state.target_qty} onChange={(event) => this.handleChange(event)}/>
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
mapStateToProps = ({campaigns}) => ({campaigns})
mapDispatchToProps = dispatch => {
    return {
      createForm: formData => dispatch({type: 'ADD_CAMPAIGN', payload: formData})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm) 