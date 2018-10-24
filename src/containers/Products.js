import React from 'react';

const Products = (props) => (
    <div>
        <h3>Product Components</h3>
        {props.products.map(product => 
        <div>
        <h1>{product.name}</h1>
        <p>Model: {product.model} </p>
        </div>
        )}
    </div>
)

export default Products;