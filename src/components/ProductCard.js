import React from 'react';

export const ProductCard = ({product}) => (
<div key={product.id} className="ProductCard">
<h3>Product Id: {product.product_id}</h3>
    <h3>End date: {product.end_date}</h3>
    <h3>location: {product.location}</h3>
    <h3>Target Qty: {product.target_qty}</h3>
    <h3>Sold Qty: {product.sold_qty}</h3>
</div>

)

