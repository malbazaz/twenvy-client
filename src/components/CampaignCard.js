import React from 'react';
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardHeader } from 'reactstrap'
import {ProgressBar} from 'react-bootstrap'


const CampaignCard = ({campaign}) => (
<div key={campaign.id} className="CampaignCard">
<Row>
<Col sm="6">
<Card body outline color="primary">
<CardHeader inverse color="primary"><Link to={`/campaigns/${campaign.id}`}> Campaign Number: {campaign.id}</Link></CardHeader>
    <CardBody>
<CardTitle>Product Name: </CardTitle>
    <CardSubtitle>Product Brand: {campaign.product_id}</CardSubtitle>
    <CardText>Product Description:</CardText>
    <CardText>End date: {campaign.end_date}</CardText>
    <CardText>location: {campaign.location}</CardText>
    <CardText>Target Qty: {campaign.target_qty}</CardText>
    <CardText>Sold Qty: {campaign.sold_qty}</CardText>
    <ProgressBar active now={(campaign.sold_qty/campaign.target_qty)*100} label={`${(campaign.sold_qty/campaign.target_qty)*100}%`} />
    </CardBody>
</Card>
</Col>
</Row>
</div>

)

export default CampaignCard
