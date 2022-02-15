import React,{useState} from 'react'
import './projects.css'
import Pofo from '../img/img-4.PNG'
import animation from '../img/animation.png'
import box from '../img/1.jpg'
import health from '../img/slider-bg.png';
import facts from '../img/facts-img.png';
import travel from '../img/travel.jpg';
import boot from '../img/boot.jpg'
import pizza from '../img/pizza.jfif'
import cart from "../img/cart.jpg";
import git from '../img/git.png'
import movie from '../img/movie.jpg'
import insta from '../img/download.png'
import jomo from '../img/jomo2.png'
import youtube from '../img/youtube.png'
import bootcamp from '../img/bootcamp.png'


const Projects = () => {
      const [html, sethtml] = useState(true)
      const [js, setJs] = useState(false)
      const [bootstrap, setBootstrap] = useState(false)
      const [react, setReact] = useState(false)
      const [node, setNode] = useState(false)
      // const [mern, setMern] = useState(false)


      const Html=()=>{
          sethtml(true)
          setJs(false)
          setBootstrap(false)
          setReact(false)
          setNode(false)
          // setMern(false)
      }

      const Js=()=>{
        sethtml(false)
        setJs(true)
        setBootstrap(false)
        setReact(false)
        setNode(false)
        // setMern(false)
      }

      const Bootstrap=()=>{
        sethtml(false)
        setJs(false)
        setBootstrap(true)
        setReact(false)
        setNode(false)
        // setMern(false)
      }

      const React=()=>{
        sethtml(false)
        setJs(false)
        setBootstrap(false)
        setReact(true)
        setNode(false)
        // setMern(false)
      }

      const Node=()=>{
        sethtml(false)
        setJs(false)
        setBootstrap(false)
        setReact(false)
        setNode(true)
        // setMern(false)
      }

      // const Mern=()=>{
      //   sethtml(false)
      //   setJs(false)
      //   setBootstrap(false)
      //   setReact(false)
      //   setNode(false)
      //   setMern(true)
      // }

    return (
        <div>
            <div className="p">
                <nav className='p-nav'>
                    <ul className='p-ul'>
                        <li className='p-li' onClick={Html}><i class="fab fa-html5"><i class="fab fa-css3-alt"></i></i></li>
                        <li className='p-li' onClick={Js}><i class="fab fa-js-square"></i></li>
                        <li className='p-li' onClick={Bootstrap}><i class="fab fa-bootstrap"></i></li>
                        <li className='p-li' onClick={React}><i class="fab fa-react"></i></li>
                        <li className='p-li' onClick={Node}><i class="fab fa-node-js"></i></li>
                        {/* <li className='p-li' onClick={Mern}><i class="fas fa-database"></i></li> */}
                    </ul>
                </nav>
                
                <div className="p-projects row">

              {html &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={Pofo} alt="Card image cap"/>
                   <h5 className="card-title">Pofo</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/> Team work with html & css</p>
                     <a href="https://adullahqureshi.github.io/Pofo-teamwork/" className="btn btn-secondary">check</a>
                        </div>
                </div>
               }

              {html &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={animation} alt="Card image cap"/>
                   <h5 className="card-title">Animation</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/>Animation work with html & css</p>
                     <a href="https://adullahqureshi.github.io/Animations/" className="btn btn-success">check</a>
                        </div>
                </div>
               }

              {html &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={box} alt="Card image cap"/>
                   <h5 className="card-title">3D Box</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/> html & css</p>
                     <a href="https://adullahqureshi.github.io/3d-box/" className="btn btn-danger">check</a>
                        </div>
                </div>

               }

              {html &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={health} alt="Card image cap"/>
                   <h5 className="card-title">Healthcare</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/>Healthcare with html & css</p>
                     <a href="https://adullahqureshi.github.io/Healthcare/" className="btn btn-primary">check</a>
                        </div>
                </div>
               }


             {js &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={pizza} alt="Card image cap"/>
                   <h5 className="card-title">Food api</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/>Food api using Js</p>
                     <a href="https://adullahqureshi.github.io/foodapi.github.io/" className="btn btn-danger">check</a>
                        </div>
                </div>
               }


              {js &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={cart} alt="Card image cap"/>
                   <h5 className="card-title">Cart</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/>Add to cart using Js</p>
                     <a href="https://adullahqureshi.github.io/CartJs.github.io/" className="btn btn-success">check</a>
                        </div>
                </div>
               }



                {js &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={git} alt="Card image cap"/>
                   <h5 className="card-title">Github Users</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/>Github api using Js</p>
                     <a href="https://adullahqureshi.github.io/githubUser.github.io/" className="btn btn-success">check</a>
                        </div>
                </div>
               }


              {js &&
                <div className="card col-lg-3 col-md-6 col-sm-12 " >
                    <img className="card-img-top" src={movie} alt="Card image cap"/>
                   <h5 className="card-title">Movie App</h5>
                        <div className="card-body">
                     <p className="card-text"> <br/>Movie app using Js</p>
                     <a href="https://adullahqureshi.github.io/movie-app.github.io/" className="btn btn-success">check</a>
                        </div>
                </div>
               }

                {bootstrap && 
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={facts} alt="Card image cap"/>
                   <h5 className="card-title">BizPage</h5>
                        <div className="card-body">
                     <p className="card-text">Responsive Bootstrap</p>
                     <a href="https://adullahqureshi.github.io/BizpageBootstrap.git.io/" className="btn btn-primary">Go</a>
                        </div>
                </div>

                    }
                  
                  {bootstrap && 
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={travel} alt="Card image cap"/>
                   <h5 className="card-title">Travel site</h5>
                        <div className="card-body">
                     <p className="card-text">Responsive Bootstrap</p>
                     <a href="https://adullahqureshi.github.io/Travel-Bootstrap.git.io/" className="btn btn-primary">Go</a>
                        </div>
                </div>

                    }

                 {bootstrap && 
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={boot} alt="Card image cap"/>
                   <h5 className="card-title">Toutorial</h5>
                        <div className="card-body">
                     <p className="card-text">Responsive Bootstrap</p>
                     <a href="https://adullahqureshi.github.io/Bootstrap-theme.github.io/" className="btn btn-primary">Go</a>
                        </div>
                </div>

                    }


                  {react &&
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={insta} alt="Card image cap"/>
                   <h5 className="card-title">Instagram clone</h5>
                        <div className="card-body">
                     <p className="card-text">Instagram clone using ReactJS</p>
                     <a href="https://abdullah-insta-clone-1.herokuapp.com/" className="btn btn-success">Go</a>
                        </div>
                </div>
                            }


                             {react &&
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={jomo} alt="Card image cap"/>
                   <h5 className="card-title">Jomo.Pk</h5>
                        <div className="card-body">
                     <p className="card-text">Jomo shpping app using ReactJs</p>
                     <a href="https://jomo-clone-pk.herokuapp.com/" className="btn btn-secondary">Go</a>
                        </div>
                </div>
                            }



                             {react &&
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={youtube} alt="Card image cap"/>
                   <h5 className="card-title">Youtube</h5>
                        <div className="card-body">
                     <p className="card-text">Youtube clone using ReactJs</p>
                     <a href="https://youtube-clone-11.herokuapp.com/" className="btn btn-primary">Go</a>
                        </div>
                </div>
                            }




            {node &&
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src={bootcamp} alt="Card image cap"/>
                   <h5 className="card-title">DevBootcamp</h5>
                        <div className="card-body" >
                     <p className="card-text" >Nodemailer<br/>JWT authenctications<br/>Geocoder</p>
                     <a href="https://adullahqureshi.github.io/Devbootcamp/" className="btn btn-primary">Go</a>
                        </div>
                </div>
                        }

                       
                {/* { mern &&
                <div className="card col-lg-3 col-md-6 col-sm-12" >
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                   <h5 className="card-title">Mern</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="" className="btn btn-primary">Go</a>
                        </div>
                </div>
                    }   */} 
                
                </div>
            </div>
        </div>
    )
}

export default Projects
  