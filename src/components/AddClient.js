import axios from 'axios';
import React, { useRef } from 'react'
import './rightside.css'
export default function AddClient() {

  const input =useRef()

 const addUser=(e)=>{
      e.preventDefault()
     
     console.log(input.current.value);
      axios.post('http://localhost:8000/clients', {

        email:input.current.value
      })
      input.current.value=""
  }
  return (
    <div className='menu'>
      
        <input type={"text"} placeholder="Email" ref={input}></input>
        <input type={"text"} placeholder="Number" ></input>
        <input type={"date"} placeholder="Birthday"></input>
        <input type={"text"} placeholder="location"></input>
        <select>
          <option>Gender</option>
          <option>male</option>
          <option>Female</option>
        </select>
        <input type={"number"} placeholder="country code"></input>
        <input type={"file"} placeholder="photo"></input>
        <input type={"text"} placeholder="device token"></input>
        <input type={"number"} placeholder="Rating"></input>
        <input type={"text"} placeholder="Subscription Status"></input>

        <button onClick={addUser}>save</button>


    </div>
  )
  
}
