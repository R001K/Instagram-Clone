import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    function signup()
    {
        if(username==="" && password==="")
        {
    
            console.log("Feilds Empty");
           alert("Fill The Field First");
          navigate('/signup');
        
        }
        else
        {
            console.log("Feilds NOT Empty & GO TO MAIN PAGE");
            navigate('/posts');
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
      <h2 className='loginform3'>SignUp Form</h2>
  
    <form className='loginform' action=""   onChange={handleChange}  >
    <label htmlFor='name'>Choose username-</label>
    <input type="text" name='username'  placeholder='Username'  onChange={handleChange}/>
      <br/><br/>
    
   <label htmlFor='pass'>Create Password-</label>
    <input type="text" name='password' placeholder='Password'  onChange={handleChange} />
    <br/><br/>

    <button className='loginform1' onClick={signup}><b>SignUp</b></button>
     </form>
     </div>

  )
}
