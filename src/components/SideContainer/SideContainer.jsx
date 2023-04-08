import React, { useEffect, useState } from "react";
import "./SideContainer.css";
import Bookmark from "../Bookmark/Bookmark";

const SideContainer = ({ readTime ,bookmark}) => {
    const [time ,setTime] = useState()
 const titleArray = [];
  let bookLength = 0;
  let title ;
   
  for(const book of bookmark){
    bookLength = bookLength + book.quantity
     title = book.title
      
     titleArray.push(title)
      
    
  }

   

  useEffect(() => {
    const getReadTime = localStorage.getItem("time");
    setTime(getReadTime);
  }, [readTime ]);

  return (
    <div>
      <div className="side-cart-container">
        <div className="spent-time">
          <p>Spent timeon read : {time}</p>
        </div>
        <div className="bookmerk-container">
             <h5 id="bookmarkBlog">Bookmarked Blogs : {titleArray.length}</h5>
        {titleArray.map((title) => (
             <Bookmark
             title = {title}
             
             ></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
