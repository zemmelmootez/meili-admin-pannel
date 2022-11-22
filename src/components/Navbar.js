import React from 'react'
import img from '../meili.svg'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={img}></img>
      <div className='navRight'>
      <p>Welcome ela</p>
      <img src={img}></img>
      </div>
    </div>
  )
}
