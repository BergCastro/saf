import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './dashboard/dashboard'
import Usuarios from './usuario/usuario'

export default props => (
    <div className='content-wrapper' style={{height: '100%'}}> 
        <Switch>
            <Route exact path='/' component={Dashboard} />           
            <Route path='/usuarios' component={Usuarios} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)