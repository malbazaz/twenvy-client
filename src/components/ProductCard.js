import React from 'react';

export const ProductCard = ({product}) => (
<div key={product.id} className="ProductCard">
<h3>Name: {product.name}</h3>
    <h3>Model: {product.model}</h3>
    <h3>Description: {product.description}</h3>
    <h3>brand: {product.target_qty}</h3>
    <h3>image_url: {product.sold_qty}</h3>
    <h3>price: ${product.price}</h3>
</div>

)

