import React, { useRef } from 'react'

function Switch() {
    
const switchTheme=(e) =>{
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
  }
  const currentTheme = localStorage.getItem('theme');
  const toggleSwitch =useRef()
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
  }
  return (
    <div>
           <div class="theme-switch-wrapper">
       <label class="theme-switch" onClick={switchTheme} for="checkbox">
    <input type="checkbox" id="checkbox" ref={toggleSwitch}/>
    <div class="slider round"></div>
  </label>
  </div> 
    </div>
  )
}

export default Switch
