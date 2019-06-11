import React from 'react'
import MarketItem from './marketItem'

const Market = props => {
    <div clasName='market-area'>
        <MarketItem marketItemName='NASDAQ' marketItemPrice='$999' marketItemStats='123$ | 456%'/>
        <MarketItem marketItemName='DJIA' marketItemPrice='$998' marketItemStats='234$ | 567%'/>
        <MarketItem marketItemName='S&P' marketItemPrice='$997' marketItemStats='345$ | 678%'/>
    </div>
}

export default Market;