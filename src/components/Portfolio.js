import './Portfolio.scss';
import PortfolioList from './PortfolioList'
import { useState, useEffect } from 'react'
import { webapp, mobileapp, designs } from './Data'

const Portfolio = () => {
    const [selected, setSelected] = useState('web');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'design',
            title: 'Designs',
        },
    ];

    useEffect(() => {

        switch (selected) {
            case 'web':
                setData(webapp);
                break;
            case 'mobile':
                setData(mobileapp);
                break;
            case 'design':
                setData(designs);
                break;
            default:
                setData(webapp);
        }

    }, [selected]);



    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <div className="ulC">
                <ul>
                    {
                        list.map(item => (<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />))
                    }
                </ul>
            </div>
            <div className="container">
                {
                    data.map(d => (
                        <div className="item">

                            <img src={d.img} alt="" />
                            <div className="layer">
                                <h3>{d.title}</h3>
                            </div>

                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Portfolio
