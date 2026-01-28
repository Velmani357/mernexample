import React from 'react'
import {Link } from 'react-router-dom'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import Form from '../hooks/Form'
import State from '../hooks/State'
import {useState} from "react"
import { userContext } from '../App'

const Home = () => {
  const [user,setUser]=useState("velu")
  return (
    <div>
      <Link to ={'/form'}>Form</Link><br />
      <Link to={'/state'}>useState example</Link><br />
      <Link to={'/reducer'}>useReducer example</Link>
      <userContext.Provider value={user}>

   <Profile  age={20} skills={["HTML","css","js"]}/> 
    
      </userContext.Provider>
      <Parent/>
      {/* <Parent/>
 
      <Form/>
      <State/>  */}
    </div>
  )
}

export default Home
