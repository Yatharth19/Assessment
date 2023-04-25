import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users1'>Users1</Link></li>
            <li><Link to='/users2'>Users2</Link></li>
            <li><Link to='/users3'>Users3</Link></li>
            <li><Link to='/users4'>Users4</Link></li>
            <li><Link to='/cities'>Cities</Link></li>
        </ul>
    </div>
  )
}

export default Navbar