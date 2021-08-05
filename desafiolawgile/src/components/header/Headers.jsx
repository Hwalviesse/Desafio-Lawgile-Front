import React from 'react';
import {BrowserRouter as Router ,NavLink} from 'react-router-dom'


import './style.css'


const Header = ()=>{
  return (
    <header className='menu'>
      <h2>Post-it</h2>
        <nav>
        <NavLink to='/' className='navbar'>Home</NavLink>
      | <NavLink to='/contato' className='navbar'>Contato</NavLink>
      <NavLink to='/compre' className='navbar'>Compre agora</NavLink>
      </nav>
    </header>
  )
}

export default Header