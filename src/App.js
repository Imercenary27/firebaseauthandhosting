
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavbarStyle } from './Landing';
import {Signup} from './SignUp';
import {Login} from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavbarStyle/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
