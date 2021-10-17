import './Intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';


const Intro = () => {
    const textRef = useRef();
    useEffect( ()=>{
        init(textRef.current, { 
            showCursor: false, 
            typeSpeed: 30,
            backDelay: 1500,
            backSpeed: 50,
            
            strings: ['Front-end Developer', 'UI Designer'] });
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgC">
                    <img src="/images/hero3.png" alt="Hero Image" />
                </div>
            </div>-
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Edmund Cyrill</h1>
                    
                </div>
                <h3><span ref={textRef}></span></h3>
                <a href="#portfolio"><img src="/images/down.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Intro
