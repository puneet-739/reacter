import { useState } from 'react';
import '../Css/parentAppBody.css';

const menuList = [
    'home', 'news monkey','777', 'puzzle', 'fun'
]

function SideBarMenu({mode, theme, setTheme}) {
    const [hover, setHover] = useState(-1);
    const getHoverColor=(index)=>theme?(index===hover? theme.buttonColor: theme.layerThree):'white';
    const getTextcolor=(index)=>theme?(index===hover? theme.textColor: 'black'): 'black';
    let isDark = mode === 'dark';
    const backgroundColor = theme? theme.layerThree : 'white';
    const sideBarMenu = menuList.map((option, index) => <a className="side-menus" style={{backgroundColor: getHoverColor(index), color: getTextcolor(index)}} onMouseEnter={() => {setHover(index)}} onMouseLeave={()=>{setHover(-1)}} href="/"> {option} </a>)
    return <>
    {sideBarMenu}
    </>
}

export default SideBarMenu;