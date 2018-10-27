import React from 'react';
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardHeader } from 'reactstrap'


const CampaignCard = ({campaign}) => (
<div key={campaign.id} className="CampaignCard">
<Row>
<Col sm="6">
<Card>
<CardHeader><Link to={`/campaigns/${campaign.id}`}> Campaign Number: {campaign.id}</Link></CardHeader>
    <CardBody>
<CardTitle>Product Name: </CardTitle>
    <CardSubtitle>Product Brand: {campaign.product_id}</CardSubtitle>
    <CardText>Product Description:</CardText>
    <CardText>End date: {campaign.end_date}</CardText>
    <CardText>location: {campaign.location}</CardText>
    <CardText>Target Qty: {campaign.target_qty}</CardText>
    <CardText>Sold Qty: {campaign.sold_qty}</CardText>
    </CardBody>
</Card>
</Col>
</Row>
</div>

)

export default CampaignCard
