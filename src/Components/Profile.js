import React from 'react'
import'./Style/Profile.css'
export default function Profile() {

  function First()
  {
    document.getElementById('img1').src="images/Rahul.jpg";
    document.getElementById('img2').src="images/R1.jpg";
    document.getElementById('img3').src="images/R2.jpg";
    document.getElementById('img4').src="images/R3.jpg";
    document.getElementById('img5').src="images/R4.jpg";
    document.getElementById('img6').src="images/R5.jpg";

   
  }

  function Pre()
  {
    document.getElementById('img1').src="images/T1.jpg";
    document.getElementById('img2').src="images/R2.jpg";
    document.getElementById('img3').src="images/T3.jpg";
    document.getElementById('img4').src="images/T3.jpg";
    document.getElementById('img5').src="images/T4.jpg";
    document.getElementById('img6').src="images/T5.jpg";
   

    document.getElementById('msg').innerHTML="Hii! Previous";

  }

  
  return (
    <div className='DarkMode'>

<img className='profile' src=" Images/Rahul.jpg"/>

<p className='P'><b>Posts</b></p>
<p className='F1'><b>Followers</b></p>
<p className='F2'><b>Following</b></p>


<p className='M1'>10</p>
<p className='M2'>600</p>
<p className='M3'>10</p>

<p className='BIO'><b>||Software Enginner||</b>
<br/> I Am RAhul KHambra<br/>My Age Is 23

</p>
<p className='Username'><b>Khambra.rahul</b></p>

<button className='Edit'>Edit Profile</button>

<div className='Posts'>
 <button onClick={First}>  <b>Posts</b></button>
</div>

<div className='Tags'>
 <button  onClick={Pre}>  <b>Tags</b></button>
</div>



<img id='img1'
        className='Posts'
       src="Images/Rahul.jpg" width="260px" height="200px;"
          alt />
 
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img id='img2'
        className='Posts'
       src="Images/R5.jpg" width="260px" height="200px;"
          alt />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img id='img3'
        className='Posts'
       src="Images/R3.jpg" width="260px" height="200px;"
          alt />

  <br/><br/>   <br/><br/>
 
<img id='img4'
        className='Posts'
       src="Images/R2.jpg" width="260px" height="200px;"
          alt />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img id='img5'
        className='Posts'
       src="Images/R4.jpg" width="260px" height="200px;"
          alt />




&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img id='img6'
        className='Posts'
       src="Images/R1.jpg" width="260px" height="200px;"
          alt />

    </div>
  )
}
