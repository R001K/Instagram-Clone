import React from 'react'
import'./Style/InstagramNavbar.css'

export default function InstagramNavbar() {
  return (
    
    <div className="app">
    <div className="app__header">
     
      <div className="app__headerWrapper">
      <a href='/'>
        <img
          src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram original logo"  /> </a>
        
    <a href="/" > <button className="text__button">Logout</button></a>   
        <div className="app__headerButtons">
     
     <a href="login"> <button className="primary__button">Log in</button> </a>  
     <a href='/signup'> <button className="text__button">Sign up</button> </a>   
        </div>
      </div>
    </div>
  </div>

);
}

