import React, { Component } from 'react';
import './App.css';
import Campaigns from './containers/Campaigns'
import Products from  './containers/Products'
import {connect} from 'react-redux'
import {fetchCampaigns} from './action/Campaigns'
import {fetchProducts} from './action/Products'
import productsReducer from './reducers/productsReducer'
import campaignsReducer from './reducers/campaignsReducer'

// const products = [{
//   name: "Iphone XS",
//   brand: "Apple",
//   price: 999,
//   img_url: "",
//   description: "Coolest Iphone ever.",
//   category_id: 1, 
//   model: "iphoneXS_V01"
// }]
// const campaigns = [{
//   product_id: 2, 
//   end_date: 2018-12-10, 
//   location: "San Francisco",
//   target_qty: 20, 
//   sold_qty:10
// }]


class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     campaigns:[], 
  //     products: []
  //   }
  // }
  componentDidMount() {
    this.props.fetchCampaigns() 
    // this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
      <div className="App">
        App Container
        <Products products={this.props.products} />
        <Campaigns campaigns={this.props.campaigns}  />

      </div>
      </div>
 

    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return({
    campaigns: state.campaignsReducer, 
    products: state.productsReducer
  })
}


const mapDispatchToProps = (dispatch) => {
  return({
     fetchCampaigns: () =>{
       let action = fetchCampaigns()
       dispatch(action)
     },
     fetchProducts: () =>{
      let action = fetchProducts()
      dispatch(action)
     }
    
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(App);