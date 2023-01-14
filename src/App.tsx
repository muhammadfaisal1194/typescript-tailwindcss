import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} /> 
    <Route path='/signup' element={<Signup/>} /> 
    <Route path='/home' element={<Home/>} /> 

  </Routes>
  
  </BrowserRouter>
  
  );
}

export default App;
