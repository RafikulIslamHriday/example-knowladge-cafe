import React from 'react';
import "./blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark} from '@fortawesome/free-solid-svg-icons'
 

const Blog = (props) => {
    const {name, coverImg,persionImg, date,timeText, title ,hasTag,time }= props.blog
    const handelReadTime = props.handelReadTime
    const handleBookMark = props.handleBookMark
     
     
    
    
 



    return (
        <div className='cart '>
             <div className="blog-img">
                <img src={coverImg} alt="" />
             </div>
             <div className="blog-info">
                    <div className="info-text-container">
                        <div className="info-name">
                            <div className="person-img">
                                <img src={persionImg} alt="" />
                            </div>
                            <div className="person-text">
                                <h3>{name}</h3>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className="time-text d-flex gap-3 align-items-center ">
                            <p>{timeText}</p>
                            <FontAwesomeIcon  icon= {faBookmark}  onClick={() => handleBookMark(props.blog)}  /> 
                        </div>
                    </div>
                    <h2 className='title'>{title}</h2>
                    <p className='hastag'>{hasTag}</p>
                    <button onClick={() => handelReadTime(time)} className='btn btn-primary '>Mark as read</button>
                    <hr />
             </div>
        </div>
    );
};

export default Blog;