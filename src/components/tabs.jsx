import React from 'react'
import TabItem from './TabItem'

const Tabs = props => {
    <div className='tabs-area'>
            <TabItem tabName='Quote'/>
            <TabItem tabName='Markets'/>
            <TabItem tabName='Watchlists'/>
        </div>
}

export default Tabs;