import React from 'react'
import { BrowserRouter,NavLink, Routes, Route ,Outlet} from "react-router-dom";

import './Aside.css'
import './rightside.css'

export default function aside() {
  return (
    <div className="contentMain">
        
            <div className='aside'>
            <NavLink to='addDriver' >Add Driver </NavLink>
            <NavLink to ='addClient'>Add Client </NavLink>
            <NavLink to='consDriver'>Consult Drivers </NavLink>
            <NavLink to='consClient'>Consult Clients </NavLink>
            <NavLink to='consReq'>Consult Requests </NavLink>
            </div>
         
            <Outlet />
         
      
      
    </div>
  )
}
