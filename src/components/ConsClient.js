import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ConsClient() {


  const [client,SetClients]=useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:8000/clients")
    .then(response => 
      {
       
       
          SetClients(response.data)
        
      }
      
      )
 
    
  },[])
  return (
    <div className=' '>
      {client.map(e=>

        <div>
     {e.email} 
     <br/>
     </div>
          
   
      )}

    </div>
  )
}
