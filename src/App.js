import './App.css';
import Login from './components/Login';
import './assets/Login.css'
import { useRef } from 'react';



const switchTheme=(e) =>{
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
  else {        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
  }    
}
function App() {
  const currentTheme = localStorage.getItem('theme');
const toggleSwitch =useRef()
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
  }
}
  return (
    <div className="body-container">
      <div class="theme-switch-wrapper">
       <label class="theme-switch" onClick={switchTheme} for="checkbox">
    <input type="checkbox" id="checkbox" ref={toggleSwitch}/>
    <div class="slider round"></div>
  </label>
  </div> 
      <Login></Login>
    </div>
  );
}

export default App;
