import React from 'react'
import './about.css'
import Img2 from '../img/pro.jpg'
import Profile from '../img/profile.png'

const About = () => {


   
    return (
        <div>
           <div className="a">
               <div className="a-left">
                   <div className="a-card bg"></div>
                   <div className="a-card">
                       <img src={Profile} alt="" className='a-img'/>
                   </div>
               </div>
             <div className="a-right">
                 <h1 className='a-title'>About Me</h1>
                 <p className='a-sub'>I can create full fledge responsive frontend and backend of Web applications
                  using lastest technologies like: 
                  <i class="fab fa-html5"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i class="fab fa-bootstrap"></i>
                  <i class="fab fa-js-square"></i>
                  <i class="fab fa-react"></i>
                  <i class="fab fa-node-js"></i>
                  <i class="fas fa-database" style={{color:'black'}}></i>
                  </p>
                 <div className="github">
                     <h5>check my  Github Profile</h5>
                 <a href='https://github.com/AdullahQureshi'><button className='git-btn btn btn-success'>Profile</button></a>   
                 
                 </div>
             </div>
               </div> 
        </div>
    )
}

export default About
