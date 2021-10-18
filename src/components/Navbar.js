import './Navbar.scss';
import { Call, Mail } from '@material-ui/icons';


const Navbar = (props) => {
    const { openMenu,setOpenMenu } = props;

    return (
        <div className={'navbar ' + (openMenu && 'active')}>

            <div className='left'>
                <a href="#intro" className='logo'>EdCy</a>
                <div className='info'>
                    <Call className='icon' />
                    <span className='text'>+91 7319 8263 79</span>
                </div>
                <div className='info'>
                    <Mail className='icon' />
                    <span className='text'>cyrilldavis22@gmail.com</span>
                </div>
                <div className="resume">
                    <a href='/Doc/Resume1.pdf' download>Download CV</a>
                </div>
            </div>

            <div className='right'>
                
                <div className="hamburger" onClick={ ()=>setOpenMenu(!openMenu) }>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
