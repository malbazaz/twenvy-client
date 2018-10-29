import React, { Component } from 'react';
import './App.css';
import Campaigns from './containers/Campaigns'
import Products from  './containers/Products'
import {connect} from 'react-redux'
import {fetchCampaigns} from './action/Campaigns'
import {fetchProducts} from './action/Products'
import MainNavbar from './components/MainNavbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CampaignForm from './containers/CampaignForm'
import Home from './components/Home'
import CampaignPage from './containers/CampaignPage'
import CampaignJoinForm from './containers/CampaignJoinForm'
import productsReducer from './reducers/productsReducer'
import campaignsReducer from './reducers/campaignsReducer'



class App extends Component {

  componentDidMount() {
    // this.props.fetchCampaigns() 
    // this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <Router>
          <div>
        <MainNavbar />
        <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/create' component={CampaignForm} />
              <Route exact path='/campaigns/:id' component={CampaignPage} />
              <Route path='/campaigns' component={Campaigns} />
              <Route path='/products' component={Products} />
              <Route path='/join' component={CampaignJoinForm} />
        </Switch>
        </div>
        </Router>
      {/* <div className="App">
        App Container
        <Products products={this.props.products} />
        <Campaigns campaigns={this.props.campaigns}  />

      </div> */}
      </div>
 

    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
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