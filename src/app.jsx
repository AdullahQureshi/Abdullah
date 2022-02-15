import React from 'react'
import About from './about/about'
import Intro from './intro/intro'
import Projects from './Projects/projects'
import Contact from './Contact/contact'

const App = () => {
    return (
        <div>
            <Intro />    
            <About />  
            <Projects/>     
            <Contact/>
        </div>
    )
}

export default App
