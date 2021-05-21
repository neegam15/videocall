import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Web1 from './image1.svg'


function Common(props) {
    return (
        <>
            <section id='header' className='d-flex justify-content-center align-self-center'>
                <div className="container-fluid nav_bg">
                    <div className="row" >
                        <div className="col-10 mx-auto " >
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                                    <h1>{props.title} <strong className='brand-name'>Thapa Technical</strong></h1>

                                    <h2 className='my-3' >We are the team of talented developer making websites</h2>

                                    <div className="mt-3">
                                        <NavLink to={props.goto} className='btn-get-started'>{props.btn}</NavLink>
                                    </div>


                                </div>
                                <div className=" col-lg-6 order-1 order-lg-2 header-img " >
                                    <img src={Web1} className='img-fluid animated' alt='image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common

//  justify-content-center align-self-center