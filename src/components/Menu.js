import './Menu.scss';

const Menu = (props) => {
    const {openMenu,setOpenMenu} = props;

    return (
        <div className={'menu ' + (openMenu && 'active')}>
            <ul>
                <li onClick={()=>setOpenMenu(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
