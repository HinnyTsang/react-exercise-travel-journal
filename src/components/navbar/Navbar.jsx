import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav--container'>
            <img className='nav--logo' src="/images/logo.png"></img>
            <h1 className='nav--title'>my travel journal</h1>
        </div>
    </nav>
  )
}

export default Navbar