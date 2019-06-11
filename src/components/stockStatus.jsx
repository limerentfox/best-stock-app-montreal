import React from 'react'

const StockStatus = props => {
    <div className = 'stock-status-area'>
        <span>{props.stockStatusUnitPrice}</span>
        <span>{props.stockStatusIndexChange}</span>
        <span>{props.stockStatusPercentage}</span>
    </div>
}

export default StockStatus;