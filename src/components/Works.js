import './Works.scss';
import { useState } from 'react';

const Works = () => {
    const [ currentSlide,setCurrentSlide ] = useState(0);
    const data = [
        {
            id: '1',
            icon: '/images/mobile.png',
            title: 'Web Design',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In impedit',
            img: '/images/app1.png',
        
        },
        {
            id: '2',
            icon: '/images/mobile.png',
            title: 'UI Design',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In impedit',
            img: '/images/app2.png',
        
        },
        {
            id: '3',
            icon: '/images/mobile.png',
            title: 'Mobile Design',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In impedit',
            img: '/images/app3.png',
        
        },
    ]

    const handleClick = (way)=>{
        way === 'left' ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw` }}>
                {
                    data.map(d=>(
                        <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftC">
                                <div className="imgC">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>
                                <span>Projects</span>
                            </div>

                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                    ))
                }
                
            </div>
            <img src="/images/arrow.png" className='arrow left' alt="" onClick={()=>handleClick('left')}/>
            <img src="/images/arrow.png" className='arrow right' alt="" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
