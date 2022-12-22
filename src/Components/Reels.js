/* eslint-disable react/jsx-no-undef */
import React from 'react';
import'./Style/Reels.css'


export default function Reels() {
  return (
    <div className='reels2' >

  {/* <embed type="image/png" src="heart.png" width={300} height={200}/>  */}
  {/* <embed type="rabbit/mp4" src="bear.mp4" width={400} height={300} /> */}
  <video controls width="420"  height="340" muted>
      <source src="Vedio.mp4" type="video/mp4"/>
      
    </video> 
    
<div className='reels3' >
  <video width="420" height="340" controls>
  <source src="rabbit.mp4" type="video/mp4" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en"/> 
 </video>
 </div>

     
  
     </div>
  )
}
