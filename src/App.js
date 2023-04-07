import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";
 
 

function App() {
    const [readTime, setReadTime] = useState('')
    const [bookmark , setBookMark] = useState([])
    // const [bookMark , setBookMark] = useState({})
    const handelReadTime = (time) =>{
         const previousReadTime =JSON.parse(localStorage.getItem("time")) 
         if(previousReadTime){
            const totalReadTime = previousReadTime + time;
            localStorage.setItem("time",totalReadTime)
            setReadTime(totalReadTime)
            
         }
         else{
            localStorage.setItem("time",time)
            setReadTime(time)
         }
    }
     const handleBookMark = id =>{
        const bookMark = getStoredBookMark()
         // add quantity
    const quantity =  bookMark[id];
    if (!quantity) {
         bookMark[id] = 1;
         setBookMark(quantity)
    }
    else {
        const newQuantity = quantity ;
         bookMark[id] = newQuantity;
         setBookMark(newQuantity)
    }
    localStorage.setItem('bookmark', JSON.stringify( bookMark));
}
const getStoredBookMark = () =>{
    let bookMark = {}
    const storedBookMark = localStorage.getItem("bookmark")
    if(storedBookMark){
        bookMark = JSON.parse(storedBookMark)
    }
    return bookMark
 }
     

    
  return (
    <div className="App container">
       <Header></Header>
       <Body handelReadTime = {handelReadTime} readTime = {readTime} handleBookMark = {handleBookMark} bookmark = {bookmark}></Body>
    </div>
  );
}



export default App;
