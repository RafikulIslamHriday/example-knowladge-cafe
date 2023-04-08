import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState  } from "react";
 
 
 

function App() {
    const [readTime, setReadTime] = useState('')
 
    
     

   

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
 

    
  return (
    <div className="App container">
       <Header></Header>
       <Body handelReadTime = {handelReadTime} readTime = {readTime}></Body>
    </div>
  );
}



export default App;
