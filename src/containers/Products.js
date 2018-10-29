import React, {Component} from 'react';
import {ProductCard} from '../components/ProductCard'
import {connect} from 'react-redux'
import {fetchProducts} from '../action/Products'

class Products extends Component{

    
componentDidMount() {
    this.props.fetchProducts()
    }
    
   render(){
       return(
        <div class="center-div">
        <h3>Product Components</h3>
        <br/>
        {this.props && this.props.products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
       )
   } 
}

const mapStateToProps = (state) => {
    return({
        products: state.productsReducer
    })
}
export default connect(mapStateToProps, {fetchProducts})(Products); 