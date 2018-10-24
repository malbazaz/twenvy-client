import React from 'react';

const Campaigns = (props) => (
    <div>
        <h3>Campaign Components</h3>
        {props.campaigns.map(campaign => 
        <div>
        <h1>{campaign.product_id}</h1>
        <p>Quantity Sold: {campaign.qty_sold} </p>
        </div>
        )}
    </div>
)

export default Campaigns; 