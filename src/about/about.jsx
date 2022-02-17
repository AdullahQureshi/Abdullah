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
                     <p className="ab-p">Dedicated MERN Stack developer training in the latest technologies.</p>
                     <p className="ab-p">Building highly responsive and quality we& b applications with MERN Technologies.</p>
                     <p className="ab-p">Brief knowledge & understanding of React & Redux.</p>
                     <p className="ab-p">Strong project management skills, customer service, strong collaborative skills.</p>
                     <p className="ab-p">Excellent problem solving skills.</p>

                 <p className='a-sub'>
                  <i class="fab fa-html5 px-2"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i class="fab fa-bootstrap"></i>
                  <i class="fab fa-js-square"></i>
                  <i class="fab fa-react"></i>
                  <i class="fab fa-node-js"></i>
                  <i class="fas fa-database" style={{color:'black'}}></i>
                  </p>
                 <div className="github">
                     <h5>Github Profile</h5>
                 <a href='https://github.com/AdullahQureshi'><button className='git-btn btn btn-success'>Profile</button></a>   
                 
                 </div>
             </div>
               </div> 
        </div>
    )
}

export default About
