import './App.css';
import { Route,Routes} from 'react-router-dom'
import {Home,PostDetails, CreatePost,Navbar} from './modules'




function App() {



  
  return (
    <div className="App">
      {window.location.hostname === 'localhost' && <Navbar/>}
      Hello, Welcome to react hooks app Home Page!!
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/post-details/:postId' element={<PostDetails/>}></Route>
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>



    </div>
  );
}

export default App;
