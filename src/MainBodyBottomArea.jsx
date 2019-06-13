import React from 'react'
import KeyStats from './components/KeyStats';
import CompanyOverview from './components/CompanyOverview';
import TopPeers from './components/topPeers';

const tempKeyStateListItems = [
    {
        name: 'stat1',
        value: 1234
    },
    {
        name: 'stat2',
        value: 2345
    }
]

const MainBodyBottomArea = props => {
    return (
        <div className='main-body-bottom-area'>
            <KeyStats keyStatsListItems={tempKeyStateListItems}/>
            <CompanyOverview companyName={'Some company'} companyLink={'some link'} companyDescription={'some description'}/>
            <TopPeers topPeersList={['MSFT', 'NOK', 'IBM', 'BBRY', 'HPQ']}/>
        </div>
    )
}

export default MainBodyBottomArea;