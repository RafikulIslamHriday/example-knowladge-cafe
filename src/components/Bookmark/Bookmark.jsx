import React from 'react';
import './Bookmark.css'

const Bookmark = ({title}) => {
    return (
        <div className='bookmark'>
            <h4>{title}</h4>
        </div>
    );
};

export default Bookmark;