import React, { useEffect, useState } from 'react';
import "./Body.css"
import Blog from '../Blog/Blog';
import SideContainer from '../SideContainer/SideContainer';


const Body = ({handelReadTime ,readTime,handleBookMark,bookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data)) 
        
         
    },[])

    return (
        <div className='bodyContainer '>
            <div className='blog-container'>
                 <div className="d">
                    {
                        blogs.map(blog => <Blog key = {blog.id}
                        blog={blog}
                        handelReadTime = {handelReadTime}
                        handleBookMark = {handleBookMark}
                        ></Blog>)
                    }
                 </div>
            </div>
            <div className='side-container'>
                    <SideContainer readTime = {readTime} bookmark = {bookmark}  ></SideContainer>
            </div>
        </div>
    );
};

export default Body;