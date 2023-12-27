import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Profile from './components/Profile';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-event' element={<CreateEvent/>}/>
        <Route path='/my-events' element={<MyEvents/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
