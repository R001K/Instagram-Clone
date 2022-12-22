import React from 'react'
import'./Style/Likes.css'

export default function Likes() {
  function first()
  {
   
    document.getElementById('f1').innerHTML="Following";
   
  }
  function second()
  {
   
    
    document.getElementById('f2').innerHTML="Following";
  }

  function third()
  {
   
    
    document.getElementById('f3').innerHTML="Requested";
  }

  function Fourth()
  {
   
    
    document.getElementById('f4').innerHTML="Requested";
  }

  function fiveth()
  {
   
    
    document.getElementById('f5').innerHTML="Following";
  }

  return (
    <div>

      <p className='Top'><i>This Month</i> <b></b></p>

      <img className='MessageICON' src="Images/S.jpeg" /> 
 <p className='MessageICON1'>Rohit Sardana
 <br/>rohit.sardana liked Your Pick   <button onClick={first} className='Like' id='f1'> <b>Follow</b> </button>

<img className='instagramcamera4' src="Images/instagramcamera.png" /> 
</p>

<img className='MessageICON' src="Images/B.jpeg" /> 
 <p className='MessageICON1'>Rahul Kumar
 <br/>rahul.kumar liked Your Pick <button onClick={second} className='Like1' id='f2'> <b>Follow</b> </button>

<img className='instagramcamera5' src="Images/instagramcamera.png" /> 
</p>



<img className='MessageICON' src="Images/Amit.jpeg"/> 
 <p className='MessageICON1'>Amit Khambra
 <br/>amit.khambra liked Your Pick  <button onClick={third} className='Like2' id='f3'> <b>Follow</b> </button>
 
<img className='instagramcamera1' src="Images/instagramcamera.png" /> 
</p>



<img className='MessageICON' src="Images/Sivani.jpeg" /> 
 <p className='MessageICON1'><a href="/profile">Sivaani</a>
 <br/>its_sivaani liked Your Pick    
 <button onClick={Fourth} className='Like3' id='f4'> <b>Follow</b> </button>

<img className='instagramcamera2' src="Images/instagramcamera.png" /> 
</p>




<img className='MessageICON' src="Images/P.jpeg" /> 
 <p className='MessageICON1'>Priyanka
 <br/>priyanka liked Your Pick    
 <button onClick={fiveth} className='Like4' id='f5'> <b>Follow</b> </button>


<img className='instagramcamera3' src="Images/instagramcamera.png" /> 
</p>

    </div>
  )
}
