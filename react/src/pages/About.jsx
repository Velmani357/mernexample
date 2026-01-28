import React from 'react'
import {useEffect,useState} from 'react'
const About = () => {
  const[user,setUser]=useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUser(data));
    },[])
   return (
    <div>
      <h1>Users</h1>
      {user.map((user)=>(
       <div key ={user.id}>
        <h4>{user.username}</h4>
        <h5>{user.email}</h5>
        <h5>{user.password}</h5>
        
       </div>
    ))}
    </div>
  )
}

export default About
