import React from 'react'

const MarketItem = props => {
    <div className = 'market-item'>
        <span>{props.marketItemName}</span>
        <span>{props.marketItemPrice}</span>
        <span>{props.marketItemStats}</span>
    </div>
}

export default MarketItem