import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import SenderComponent from '../video/sender/SenderComponent'
import ReciverComponent from '../video/receiver/ReciverComponent'
import Login from './Login'
// import NewFooter from './NewFooter'
function Main() {

    return (
        <>
            
            <Switch>
                <Route exact path='/' component={Login} />
                
                <Route exact path='/sender' component={SenderComponent} />
                <Route exact path='/reciever' component={ReciverComponent} />
                <Route exact path='/login' component={Login} />
                <Redirect to='/' />
            </Switch>
            
        </>
    )
}

export default Main
