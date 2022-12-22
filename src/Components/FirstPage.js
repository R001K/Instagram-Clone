import React from 'react'
import'./Style/FirstPage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FirstPage() {
  return (
    <div className='backgrounColor'>
   <div className='Plant'>
     <Card.Header><h3>Featured</h3></Card.Header> 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="Images/First1.jpg" width="400px" height="420px;" />
    <Card.Body>

      <Card.Title></Card.Title>
      <Card.Text>

      </Card.Text>
      <Button variant="primary"><h3>Click</h3></Button>
      <br/><br/>
      <img src=" Images/heart.png" width="20px" height="20px;"/>  
      <img className='Comment' src=" Images/Comment.png" width="25px" height="25px;"/>
      <img className='Send' src=" Images/send.png" width="20px" height="20px;"/>
      <img className='Save' src=" Images/Save.png" width="20px" height="20px;"/> 
   
    </Card.Body>
    India: Campus Tour Begin Now
  </Card>
  </div>
  </div>
);
}
