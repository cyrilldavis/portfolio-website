import './Menu.scss';
import { Call, Mail } from '@material-ui/icons';

const Menu = (props) => {
    const { openMenu, setOpenMenu } = props;

    return (
        <div className={'menu ' + (openMenu && 'active')}>
            <ul>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a className='doc' href='/Doc/Resume1.pdf' download>Download CV</a>
                </li>

                <li>
                    <Call className='icon' />
                    <span className='text'>+91 7319 8263 79</span>
                </li>
                <li>
                    <Mail className='icon' />
                    <span className='text'>cyrilldavis22@gmail.com</span>
                </li>
            </ul>
        </div>
    )
}

export default Menu
