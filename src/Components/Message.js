import React from 'react'
import'./Style/Message.css'

export default function Message() {
  return (
    <div>
      
 {/* <h1 className='Message'>Hello The Chat</h1>  */}
 
 <div className='Message1'>


              <a href='/posts'>  <img className='chat1' src=" Images/home1.png"/>  </a> 
              &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;     <a href="/search"> <img className='chat1' src=" Images/search.png"/> </a>
              &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;      <a href="/reels"> <img className='chat1' src=" Images/reel.png" /> </a>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;     <a href="/like"> <img className='chat1' src=" Images/heart.png"/> </a>
              
           
              &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;      <a href ="/message" > <img className='chat1' src=" Images/chat.png"/> </a> 
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;   <a href="/newpost">  <img className='chat1' src=" Images/add.png"/> </a> 
             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;    <a href="/profile"> <img className='chat1' src=" Images/profile.png"/> </a> 
             <br/>
             
             </div>
             <input type="text"  className='search' placeholder="Search.."/>
      <a href="/search"><img className='reels1' src=" Images/search.png"/></a>

      <p className='Message'>Message</p>
      <a href ="/message" > <p className='Request'>Request &nbsp;&nbsp;&nbsp;(1)</p></a>  
      <a href ="/message" ><img className='Request1' src=" Images/chat.png"/> </a>
 <br/>

    {/* // Message Main  */}

 <img className='MessageICON' src="Images/S.jpeg" /> 
 <p className='MessageICON1'>Rohit Sardana<br/>Hello
 <br/>seen 3h ago
<img className='instagramcamera' src="Images/instagramcamera.png" /> 
</p>


<img className='MessageICON' src="Images/B.jpeg" /> 
 <p className='MessageICON1'>Rahul MAjoka<br/>Hello
 <br/>seen 3h ago
<img className='instagramcamera' src="Images/instagramcamera.png" /> 
</p>



<img className='MessageICON' src="Images/P.jpeg" /> 
 <p className='MessageICON1'>Priyanka <br/>Hello
 <br/>seen 3h ago
<img className='instagramcamera' src="Images/instagramcamera.png" /> 
</p>



<img className='MessageICON' src="Images/Amit.jpeg" /> 
 <p className='MessageICON1'>Amit <br/>Kha Hai
 <br/>seen 3h ago
<img className='instagramcamera' src="Images/instagramcamera.png" /> 
</p>


<img className='MessageICON' src="Images/Sivani.jpeg" /> 
 <p className='MessageICON1'>Siivani <br/>Hii
 <br/>seen 3h ago
<img className='instagramcamera' src="Images/instagramcamera.png" /> 
</p>




 
  

    </div>
  )
}

