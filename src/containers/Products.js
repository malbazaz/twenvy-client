import React, {Component} from 'react';
import {ProductCard} from '../components/ProductCard'
import {connect} from 'react-redux'
import {fetchProducts} from '../action/Products'
import Title from '../components/Title'

class Products extends Component{

    
componentDidMount() {
    this.props.fetchProducts()
    }
    
   render(){
       return(
        <div class="center-div">
        <Title text="Products" />
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