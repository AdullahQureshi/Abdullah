import React,{useRef,useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';


const Contact = () => {
      const [done, setdone] = useState(false)
     const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_i3qgsah',
             'template_lczixmc',
              formRef.current, 
              'user_b1g7fR8iddu2urdiBkknF')
          .then((result) => {
              console.log(result.text);
              setdone(true)
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        
            <div className="c">
                <div className="row" style={{height:'100vh',width:'100%'}}>

                    <div className="col col1">
                        <h2 className='c-heading py-2'>lets disscuss your projects</h2>
                        <h6 className='c-mail py-2'>Abdullahqureshi150@gmail.com</h6>
                        <h4 className='c-num py-2'>+923044838418</h4>
                        <div className="icons px-2 py-2">
                        <Icon className='icon-1' icon="akar-icons:instagram-fill" />
                        <Icon className='icon-2' icon="ant-design:facebook-filled" />
                        <Icon className='icon-3' icon="akar-icons:github-fill" />
                        <Icon className='icon-4' icon="simple-icons:heroku" />
                        </div>
                    </div>


                    <div className="col col2" >
                    <form ref={formRef} onSubmit={handleSubmit} className='formone'>
                        <h1>Email me </h1>
                     <input type="text" name="user_name" placeholder='Name' />
                     <input type="text" name="user_subject" placeholder='Subject' />
                     <input type="text" name="user_email" placeholder='Email' />

                     <textarea name="message" id="" cols="22" rows="2" placeholder='message'></textarea>
                     <button className='btn btn-danger'>submit</button>
                     {done && "Thankyou..."}
                 </form>
                    </div>
                </div>
              
            </div>
        
    )
}

export default Contact
