import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Service'>Service</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
