import { useState } from 'react';
import '../../Css/parentAppBody.css';

const menuList = [
    'home', 'news monkey','777', 'puzzle', 'fun'
]

function SideBarMenu({mode, theme, setTheme}) {
    const [hover, setHover] = useState(-1);
    let isDark = mode === 'dark';
    const getHoverColor=(index)=>theme?(index===hover? theme.buttonColor: theme.layerThree): (index !== hover && isDark? 'black': 'white');
    const getTextcolor=(index)=>theme?(index===hover? theme.textColor: 'black'): (index !== hover && isDark? 'white':'black');
    const sideBarMenu = menuList.map((option, index) => <a className="side-menus" style={{backgroundColor: getHoverColor(index), color: getTextcolor(index)}} onMouseEnter={() => {setHover(index)}} onMouseLeave={()=>{setHover(-1)}} href="/"> {option} </a>)
    return <>
    {sideBarMenu}
    </>
}

export default SideBarMenu;