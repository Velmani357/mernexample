import React from 'react'

const Profile = ({name,age,skills}) => {
  return (
    <div>
      <h1>Iam {name} {age} year old </h1>
      <ul>
        {skills.map((skill)=>{
        <li>{skill}</li>
         } )}
      </ul>
    </div>
  )
}

export default Profile
