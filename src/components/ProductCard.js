import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardHeader } from 'reactstrap'

export const ProductCard = ({product}) => (
<div key={product.id} className="ProductCard">
<Row>
<Col sm="6">
<Card body outline color="primary">
<CardHeader inverse color="primary">Name: {product.name}</CardHeader>
<CardBody>
<CardSubtitle>Product Brand: {product.brand} </CardSubtitle>
<CardText>Model: {product.model}</CardText>
<CardText>Description: {product.description}</CardText>
<CardText>price: ${product.price}</CardText>
{/* <CardText>image_url: {product.sold_qty}</CardText> */}
<CardText>Number of Campaigns for Product: {product.campaigns.length}</CardText>
</CardBody>
</Card>
</Col>
</Row>  
</div>

)
