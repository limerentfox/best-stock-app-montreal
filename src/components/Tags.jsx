import React from 'react'
import TagItem from './tagItem';

const Tags = props => {
    <div className = 'tags-area'>
        <TagItem tagName='NASDAQ'/>
        <TagItem tagName='Technology'/>
        <TagItem tagName='USD'/>
    </div>
}

export default Tags;