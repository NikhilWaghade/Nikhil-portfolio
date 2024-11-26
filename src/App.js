import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import {BrowserRouter, Routes, Route, Form} from 'react-router-dom';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>    
           <Routes>

             <Route path='/' element={<Navbar/>} /> 
             <Route path='/Hero' element={<Hero/>} /> 

          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
