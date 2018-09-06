import React from 'react'

import NavBar from './navbar' 

export default props => {
  
  return(
    <header className="main-header">
   
    <div className="logo">
      
      <span className="logo-mini"><i className='fa fa-heartbeat'></i></span>
      
      <span className="logo-lg">
      <i className='fa fa-heartbeat'></i>
      <b> SAF</b> DEF
      </span>
    </div>
    <NavBar />
    
  </header>
  )
}