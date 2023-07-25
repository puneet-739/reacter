import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Css/parentAppBody.css';

const menuList = [{ title: 'home', to: 'home' },
{ title: 'news monkey', to: 'newsMonkey' },
{ title: '777', to: 'home' },
{ title: 'puzzle', to: 'home' },
{ title: 'fun', to: 'home' }
]

function SideBarMenu({ mode, theme, setTheme }) {
    const [hover, setHover] = useState(-1);
    let isDark = mode === 'dark';
    const getHoverColor = (index) => theme ? (index === hover ? theme.buttonColor : theme.layerThree) : (index !== hover && isDark ? 'black' : 'white');
    const getTextcolor = (index) => theme ? (index === hover ? theme.textColor : 'black') : (index !== hover && isDark ? 'white' : 'black');
    const sideBarMenu = menuList.map(
        (option, index) => <Link className="side-menus" 
        style={{ backgroundColor: getHoverColor(index), color: getTextcolor(index) }} 
        onMouseEnter={() => { setHover(index) }} 
        onMouseLeave={() => { setHover(-1) }} 
        to={option.to}> 
        {option.title}
        </Link>)
    return <>
        {sideBarMenu}
    </>
}

export default SideBarMenu;