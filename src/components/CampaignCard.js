import React from 'react';

const link = "https://localhost:3000/campaigns/"

const CampaignCard = ({campaign}) => (
<div key={campaign.id} className="CampaignCard">
<h3><a href={`http://localhost:3000/campaigns/${campaign.id}`}>Campaign Id: {campaign.id}</a></h3>
    <h3>Product Id: {campaign.product_id}</h3>
    <h3>End date: {campaign.end_date}</h3>
    <h3>location: {campaign.location}</h3>
    <h3>Target Qty: {campaign.target_qty}</h3>
    <h3>Sold Qty: {campaign.sold_qty}</h3>
</div>

)

export default CampaignCard