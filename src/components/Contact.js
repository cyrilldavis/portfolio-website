import './Contact.scss';
import { useState } from 'react';

const Contact = () => {
    const [ message,setMessage ] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
        setTimeout(()=>{
            setMessage(false);},2000
        );
            
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="/images/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks! I'll reply ASAP.</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact;

