import React,{useState} from 'react'
import'./Style/LoginPage.css'
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  function login()
{
  if(username==="Rahul" && password==="12345")
  {
      
       navigate('/posts');

     // alert("Password Correct");
       console.log("Password Correct");
  }
  else
  {
   
    navigate('/login');
    
    console.log(" Password InCorrect");
     alert("Password Or Username Wrong");
   
  }

}
const navigate=useNavigate();
const initialstate={
  'username':'',
  'password':''
}

const [state,setState]=useState(initialstate);
const {username,password}=state; 
const {name,pass}=state; 
const handleChange=(e)=>{
    
    const {name,value}=e.target;
    setState({  
        ...state,
        [name]:value
    })
      }

      const handleSubmit=(e)=>{

      }    
  return (
    <div >
      <h2 className='loginform3'>Login Form</h2>
  
    <form className='loginform' action=""  onChange={handleChange} >
    <label htmlFor='name'>Enter username</label>
    <input type="text" name='username'  placeholder='Enter UserName'  onChange={handleChange} />
      <br/><br/>
 
   <label htmlFor='pass'>Enter Password</label>
    <input type="text" name='password' placeholder='Enter Password' onChange={handleChange} />
    <br/><br/>

    <button className='loginform1' onClick={login}><b>Login</b></button>
     </form>


    </div>
  )
}
