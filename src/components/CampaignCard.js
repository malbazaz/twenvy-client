import React from 'react';

import {Link} from 'react-router-dom'



const CampaignCard = ({campaign}) => (
<div key={campaign.id} className="CampaignCard">
<h3><Link to={`/campaigns/${campaign.id}`}> Campaign Id: {campaign.id}</Link></h3>
    <h3>Product Id: {campaign.product_id}</h3>
    <h3>End date: {campaign.end_date}</h3>
    <h3>location: {campaign.location}</h3>
    <h3>Target Qty: {campaign.target_qty}</h3>
    <h3>Sold Qty: {campaign.sold_qty}</h3>
</div>

)

export default CampaignCard
