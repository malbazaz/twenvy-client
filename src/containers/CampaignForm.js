import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCampaignFormData, createCampaign} from '../action/Campaigns'
import Title from '../components/Title'
import {fetchProducts} from '../action/Products'

class CampaignForm extends Component {


handleSelect = (event) => {
   
    const currentFormData = Object.assign({}, this.props.formData, {
        product_id: event.target.selectedIndex+1
    })
    this.props.updateCampaignFormData(currentFormData)
    }


// componentDidMount(){
//     this.props.fetchProducts()
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
        // debugger;
        this.props.createCampaign(this.props.formData)
        // debugger;
        this.setState({
            product_id: 0,
            end_date: 0,
            location: '',
            target_qty: 0 
        })
      }

    render() {
        // debugger;
    const {product_id, end_date, location, target_qty} = this.props.formData
        return (
            <div class="center-div">
               <Title text="Create a Campaign" />
            <form onSubmit={ event => this.handleSubmit(event) }>
                <p> <label><strong>Choose a Product</strong></label><br/>                  
                    <select id="selectBox" onChange={(event) => this.handleSelect(event)}>
                    {this.props.products.map(product =>(<option name="product_id" value={product.id} >{product.name}</option>))}
                    </select>
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

            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        formData: state.formData, 
        products: state.productsReducer
    }
}


export default connect(mapStateToProps, {updateCampaignFormData,fetchProducts, createCampaign})(CampaignForm) 

