import './App.css';
import Login from './components/Login';
import './assets/Login.css'
import { useEffect, useRef } from 'react';
import axios from "axios";
import Switch from './components/Switch';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import Aside from './components/Aside';
import AddClient from './components/AddClient';
import AddDriver from './components/AddDriver';
import ConsClient from './components/ConsClient';
import ConsDriver from './components/ConsDriver'
import ConsReq from './components/ConsReq';
import Navbar from './components/Navbar';




function App() {
 
 
  return (
    <div className="content">
   {   /*<Switch></Switch> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path='menu' element={
        <div className='static'>
      <Navbar></Navbar>
      <Aside className="asideTop"></Aside>
      </div>
      }>
      
      <Route path="addDriver" element={<AddDriver/>} ></Route>
      <Route path="addClient" element={<AddClient/>}></Route>
      <Route path='consDriver' element={<ConsDriver></ConsDriver>}> </Route>
      <Route path='consClient' element={<ConsClient/>}> </Route>
      <Route path='consReq' element={<ConsReq/>}>

      </Route>
      </Route>
     
    
      </Routes>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
