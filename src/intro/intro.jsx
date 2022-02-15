import React from 'react'
import Profile from '../img/profile.png'
import './intro.css'

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-bg"></div>
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>My name is </h2>
                    <h1 className='i-name py-4'>Abdullah <span style={{color:'red'}}>Qureshi</span></h1>
                    <div className="i-title">
                        <div className="i-title-wrapper ">
                            <div className="i-title-item">Frontend Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Backend Developer</div>
                            <div className="i-title-item">Mern Stack Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        i can design and create full fledge frontend and backend of a websites with lastest technologies.
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                 <img src={Profile} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro

