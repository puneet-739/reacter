import '../../Css/toggle.css'
import '../../Css/colorPallet.css'
import { Link } from 'react-router-dom';
import { FaMoon, FaPalette, FaSun } from 'react-icons/fa';
import { Menu, MenuItem} from '@mui/material';


// COLOR PALATE LIST OBJECTS
const colorPalletObjectList = [
    {
        'layer_one': '#F4E0B9',
        'layer_two': '#A8A196',
        'layer_three': '#7D7463',
        'layer_four': '#FE0000',
        'text_color': 'black'
    },
    {
        'layer_one': '#071952',
        'layer_two': '#0B666A',
        'layer_three': '#35A29F',
        'layer_four': '#97FEED',
        'text_color': 'white'
    },
    {
        'layer_one': '#FAF0D7',
        'layer_two': '#FFD9C0',
        'layer_three': '#8CC0DE',
        'layer_four': '#CCEEBC',
        'text_color': 'black'
    },
    {
        'layer_one': '#1D5D9B',
        'layer_two': '#75C2F6',
        'layer_three': '#F4D160',
        'layer_four': '#FBEEAC',
        'text_color': 'white'
    },
    {
        'layer_one': '#AAC8A7',
        'layer_two': '#C3EDC0',
        'layer_three': '#E9FFC2',
        'layer_four': '#FDFFAE',
        'text_color': 'black'
    }
]

function NavBar({ title = 'title', mode, setMode, theme, setTheme }) {
    let bgMode = !theme && `bg-${mode}`;
    let navBarMode = theme ? (theme.textColor === 'black' ? 'light' : 'dark') : mode;
    console.log(navBarMode);
    return (
        <nav className={`navbar navbar-expand-lg navbar-${navBarMode} ${bgMode} fixed-top`} style={theme && { backgroundColor: theme.navbarColor }}>
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/home">
                    {title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavBarItem title='Home' />
                        <NavBarItem title='About' />
                    </ul>
                    {/* <SearchBar /> */}
                    <ColorPalletList setTheme={setTheme} />
                    <ToggleButton mode={mode} setMode={setMode} setTheme={setTheme} />
                </div>
            </div>
        </nav>
    );
}

function ColorPallet({ setTheme, colorCombo }) {
    const { layer_one: navbarColor, layer_two: bodyColor, text_color: textColor, layer_three, layer_four: buttonColor } = colorCombo;
    return (
        <>
            <div className='mainPalletContainer' onClick={() => {
                setTheme({ navbarColor: navbarColor, bodyColor: bodyColor, textColor: textColor, layerThree: layer_three, buttonColor: buttonColor });
            }}>
                <div style={{ background: navbarColor }} className='colorPallet borderTop'>
                </div>
                <div style={{ background: bodyColor }} className='colorPallet borderBottom'>
                </div>
            </div>
        </>
    );
}

function ColorPalletList({ setTheme }) {
    const colorPalletComponentList = colorPalletObjectList.map((obj) => <ColorPallet setTheme={setTheme} colorCombo={obj} />);
    return (
        <div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {colorPalletComponentList}
            </ul>
        </div>
    );
}

const ToggleButton = ({ mode, setMode, setTheme }) => {
    let isDark = mode === 'dark';
    document.body.style.backgroundColor = isDark ? '#524E4E' : 'white';
    document.body.style.color = isDark ? 'white' : 'black';
    return (
        <div className='mx-2' onClick={() => {
            setMode(isDark ? 'light' : 'dark'); setTheme(null);
        }}>
            {isDark ? <FaSun size={30} color='orange' /> : <FaMoon size={28} color='grey' />}
        </div>
    );
    // return (
    //     <label className="switch me-3">
    //         <input type="checkbox" defaultChecked="" checked={isDark} onClick={() => {
    //             setMode(isDark ? 'light' : 'dark'); setTheme(null);
    //         }} />
    //         <span className="slider round" />
    //     </label>
    // );
};

function NavBarItem({ title }) {
    return (
        <li className="nav-item">
            <Link className='nav-link active' to={title.toLowerCase()}>{title} </Link>
        </li>
    );
}

function SearchInput() {
    return (
        <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
        />
    );
}

function SearchButton() {
    return (
        <button className="btn btn-outline-success" type="submit">
            Search
        </button>
    );
}

function SearchBar() {
    return (
        <form className="d-flex" role="search">
            <SearchInput />
            <SearchButton />
        </form>
    );
}

export default NavBar;