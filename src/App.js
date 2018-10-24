import React, { Component } from 'react';
import './App.css';
import Campaigns from './containers/Campaigns'
import Products from  './containers/Products'

const products = [{
  name: "Iphone XS",
  brand: "Apple",
  price: 999,
  img_url: "",
  description: "Coolest Iphone ever.",
  category_id: 1, 
  model: "iphoneXS_V01"
}]

handleButton = open => this.setState({page: page})
// const campaigns = [{
//   product_id: 2, 
//   end_date: 2018-12-10, 
//   location: "San Francisco",
//   target_qty: 20, 
//   sold_qty:10
// }]

// const API_URL = process.env.REACT_APP_API_URL

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     campaigns:[], 
  //     products: []
  //   }
  // }


  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        App Container
        <Products products={this.state.products} />
        <Campaigns campaigns={this.state.campaigns}  />

      </div>
    );
  }
}

export default App;
