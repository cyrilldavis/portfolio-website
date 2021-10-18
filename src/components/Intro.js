import './Intro.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';


const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 30,
            backDelay: 1500,
            backSpeed: 50,

            strings: ['Front-end Developer', 'UI Designer']
        });
    }, []);

    return (
        <>
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgC">
                    <img src="/images/hero3.png" alt='hero' />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Edmund Cyrill</h1>

                </div>

                <h3><span ref={textRef}></span></h3>

                <div className="skillset">
                    <span className='title'>My Skills :</span>
                    <div className="skills1">
                        <div className="start">
                            <span>HTML</span>
                        </div>
                        <div className="s1">
                            <span>CSS</span>
                        </div>
                        <div className="s1">
                            <span>JavaScript</span>
                        </div>
                        <div className="s1">
                            <span>React</span>
                        </div>
                    </div>
                    <div className="skills2">
                        <div className="start">
                            <span>Adobe XD</span>
                        </div>
                        <div className="s1">
                            <span>Figma</span>
                        </div>
                        <div className="s1">
                            <span>Git</span>
                        </div>
                        <div className="s1">
                            <span>Github</span>
                        </div>
                    </div>


                </div>
            </div>
            
        </div>
       
        </>
        
    )
}

export default Intro
