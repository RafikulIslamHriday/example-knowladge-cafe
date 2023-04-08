import React, { useEffect, useState } from "react";
import "./Body.css";
import Blog from "../Blog/Blog";
import SideContainer from "../SideContainer/SideContainer";
import { addToDb, getBookCart } from "../../utilites/fakebd";
import Question from "../Question/Question";
 
 

const Body = ({ handelReadTime, readTime }) => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark , setBookmark] = useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [bookmark]);

  useEffect(() => {
     
    const storedBookmark = getBookCart()
    const savedBlog = []
     for (const id in storedBookmark){
         const addedBlog = blogs.find(blog => blog.id === id)
          if(addedBlog){
            const quantity = storedBookmark[id]
            addedBlog.quantity = quantity
            savedBlog.push(addedBlog) 
          }
     }
     setBookmark(savedBlog)
  },[blogs])
 
  const handleBookMark = blog =>{
       
       addToDb(blog.id)
        
  }
  

  return (
    <div className="">
        <div className="bodyContainer ">
      <div className="blog-container">
        <div className="d">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handelReadTime={handelReadTime}
              handleBookMark = {handleBookMark}
               
            ></Blog>
          ))}
        </div>
      </div>
      <div className="side-container">
        <SideContainer readTime={readTime} bookmark = {bookmark}></SideContainer>
      </div>
       
    </div>

    <div className="question-section">
        <Question></Question>
    </div>
    </div>
    
  );
};

export default Body;
