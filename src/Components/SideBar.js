import '../Css/parentAppBody.css';

const menuList = [
    'home', 'news monkey','777', 'puzzle', 'fun'
]

function SideBarMenu({mode, theme, setTheme}) {
    let isDark = mode === 'dark';
    const backgroundColor = theme? theme.layerThree : 'white';
    const sideBarMenu = menuList.map((option) => <a className="side-menus" style={{backgroundColor: backgroundColor}} href="/"> {option} </a>)
    return <>
    {sideBarMenu}
    </>
}

export default SideBarMenu;