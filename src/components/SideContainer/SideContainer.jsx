import React, { useEffect, useState } from 'react';
import "./SideContainer.css"

const SideContainer = ({readTime ,bookmark}) => {
    const [time ,setTime] = useState(readTime)
    
    useEffect(() =>{
        const getReadTime = localStorage.getItem('time')
        setTime(getReadTime)
    },[readTime])
    
    return (
        <div>
           <div className="side-cart-container">
            <div className="spent-time">
                <p>Spent timeon read : {time}</p>
            </div>
            <div className="bookmerk-container">
                <div className="bookmerk">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio assumenda sint, totam modi natus?
                </div>
                <div className="bookmerk">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio assumenda sint, totam modi natus?
                </div>
                <div className="bookmerk">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio assumenda sint, totam modi natus?
                </div>
                <div className="bookmerk">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio assumenda sint, totam modi natus?
                </div>
            </div>
            </div> 
        </div>
    );
};

export default SideContainer;