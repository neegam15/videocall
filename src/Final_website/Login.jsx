import React from 'react'
import './login.css'

import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>
            {/* <div className="container-fluid main_div "> */}
            <div className="container-fluid my-5 logindiv3  ">
                <div className="row" >
                    <div className=" col-md-4 col-11 mx-auto logindiv " >
                        <div className='row'>
                            
                            <div className='row logindiv2'>
                                <div className='col-md-8 col-sm-8 col-lg-4'>
                                    <NavLink to='/sender'><Fab variant="extended" id='fab1'>Person1</Fab></NavLink>
                                </div>
                                <div className='col-md-8 col-sm-8 col-lg-4'>
                                    <NavLink to='/reciever'><Fab variant="extended" id='fab1'>Person2</Fab></NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
