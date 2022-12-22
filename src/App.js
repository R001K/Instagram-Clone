
import logo from './logo.svg';
import './App.css';

import InstagramNavbar from './Components/InstagramNavbar';
import FirstPage from './Components/FirstPage';
import Home from './Components/Home';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Welcome from './Components/Welcome';
import Posts from './Components/Posts';
import SignUp from './Components/SignUp';
import Message from './Components/Message';
import NavbarMenu from './Components/NavbarMenu';
import Search from './Components/Search';
import Reels from './Components/Reels';
import Likes from './Components/Likes';
import AddPost from './Components/AddPost';
import Profile from './Components/Profile';





function App() {
  return (
    <div>

    
 
      <Router>
      <InstagramNavbar/>
      
      
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/firstpage' element={<FirstPage/>}/> 

      <Route path='/posts' element={<Posts/>}/> 
    
      <Route path='/message' element={<Message/>}/> 
      <Route path='/search' element={<Search/>}/> 
      <Route path='/reels' element={<Reels/>}/> 
      <Route path='/like' element={<Likes/>}/> 
      <Route path='/newpost' element={<AddPost/>}/> 
      <Route path='/profile' element={<Profile/>}/> 
      
      
      <Route path='/signup' element={<SignUp/>}/> 

      
        
     
     {/* <Route path='shop' element={<Shop/>}/> */}
     {/* <Route path='*' element={<Error/>} /> */}
      </Routes>  
       </Router> 
      
   
    </div>
   
  );
}

export default App;
