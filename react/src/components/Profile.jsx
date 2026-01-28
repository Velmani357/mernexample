import React from 'react'
import { useContext } from "react"
import { userContext } from '../App'

const Profile = ({age,skills}) => {
  const name = useContext(userContext)
  return (
    <div>
      <h1>Iam {name} {age} year old </h1>
      <ul>
        {skills.map((skill)=>(//if you are using "{" here means have to use return 
        <li>{skill}</li>
         ))}
      </ul>
    </div>
  )
}

export default Profile
