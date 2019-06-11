import React from 'react'
import NewsItem from './newsItem'

const News = props => {
    <div className = 'news-area'>
        <NewsItem newsItemContent='This is a piece of news' newsItemTimestamp='some time'/>
        <NewsItem newsItemContent='This is a piece of news2' newsItemTimestamp='some time2'/>
        <NewsItem newsItemContent='This is a piece of news3' newsItemTimestamp='some time3'/>
        <NewsItem newsItemContent='This is a piece of news4' newsItemTimestamp='some time4'/>
    </div>
}

export default News