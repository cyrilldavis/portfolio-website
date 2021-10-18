import './Contact.scss';
import emailjs from "emailjs-com";
import { useState } from 'react';

const Contact = () => {
    const [ message,setMessage ] = useState(false)
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        setMessage(true);
        setTimeout(()=>{
            setMessage(false);},2000
        );
        emailjs.sendForm('service_8ahaxsy', 'template_eej06ai', e.target, 'user_H5ohHe6l39hbFldDrOhzB')
        .then((result) => {
            
            console.log(result.text);
        }, (error) => {
            
            console.log(error.text);
        });
        e.target.reset();
            
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="/images/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' name="Email"/>
                    <input className="msg" name="Message" placeholder='Message'></input>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks! I'll reply ASAP.</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact;

