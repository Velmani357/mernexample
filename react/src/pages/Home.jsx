import React from 'react'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import Form from '../hooks/Form'
import State from '../hooks/State'
const Home = () => {
  return (
    <div>
      
  <Profile  name="Velu" age={20} skills={["HTML","css","js"]}/>
    
      <Parent/>
 
      <Form/>
      <State/>
    </div>
  )
}

export default Home
