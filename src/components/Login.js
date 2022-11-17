import React from 'react'
import logo from '../meili.svg'
import '../assets/Login.css'
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
/*
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}*/

function Login() {
  return (
    <div className='login-page'>
    
    <div className='login'>


      <img src={logo}></img>
    <div className='login-container'>
      <p>Welcome to meili admin panel</p>
        <form>
            <label>Email</label>
            <input type={'email'} placeholder="enter your email"></input>
            <label>Password</label>
            <input type={'password'} placeholder="enter your password"></input>
            <button type='submit' onClick={(e)=>{e.preventDefault()}}>Connect</button>
           

        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
