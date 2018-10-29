import React from 'react';
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardHeader } from 'reactstrap'
import {ProgressBar} from 'react-bootstrap'


const CampaignCard = ({campaign}) => (

<div key={campaign.id} className="CampaignCard">
<Row>
<Col xs="4" sm="4">
<Card body outline color="primary">
<CardHeader inverse color="primary"><Link to={`/campaigns/${campaign.id}`}> Campaign Number: {campaign.id}</Link></CardHeader>
    <CardBody>
<CardTitle>Product Name: {campaign.product.name} </CardTitle>
    <CardSubtitle><strong>Product Brand:</strong> {campaign.product_id}</CardSubtitle>
    <CardText><strong>Product Description: </strong>{campaign.product.description}</CardText>
    <CardText><strong>End date: </strong> {campaign.end_date}</CardText>
    <CardText><strong>location: </strong> {campaign.location}</CardText>
    <CardText><strong>Target Qty: </strong> {campaign.target_qty}</CardText>
    <CardText><strong>Sold Qty: </strong> {campaign.sold_qty}</CardText>
    <ProgressBar active now={(campaign.sold_qty/campaign.target_qty)*100} label={`${(campaign.sold_qty/campaign.target_qty)*100}%`} />
    </CardBody>
</Card>
</Col>
</Row>
<br/>
</div>

)

export default CampaignCard
