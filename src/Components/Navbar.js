import '../Css/toggle.css'
import '../Css/colorPallet.css'
import { Link } from 'react-router-dom';

function NavBar({ title = 'title', mode, setMode, theme, setTheme }) {
    let bgMode = !theme && `bg-${mode}`;
    let navBarMode = theme ? (theme.textColor === 'black' ? 'light' : 'dark') : mode;
    console.log(navBarMode);
    return (
        <nav className={`navbar navbar-expand-lg navbar-${navBarMode} ${bgMode}`} style={theme && { backgroundColor: theme.navbarColor }}>
            <div className="container-fluid" >
                {/* <a className="navbar-brand" href="#">
                    {title}
                </a> */}
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
    const [navbarColor, bodyColor, textColor] = colorCombo;
    return (
        <>
            <div className='mainPalletContainer' onClick={() => {
                setTheme({ navbarColor: navbarColor, bodyColor: bodyColor, textColor: textColor });
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
    return (
        <div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <ColorPallet setTheme={setTheme} colorCombo={['#2D4356', '#435B66', 'white']} />
                <ColorPallet setTheme={setTheme} colorCombo={['#FFFAD7', '#FFE4A7', 'black']} />
                <ColorPallet setTheme={setTheme} colorCombo={['#001C30', '#176B87', 'white']} />
            </ul>
        </div>
    );
}

const ToggleButton = ({ mode, setMode, setTheme }) => {
    let isDark = mode === 'dark';
    document.body.style.backgroundColor = isDark ? '#524E4E' : 'white';
    document.body.style.color = isDark ? 'white' : 'black';
    return (
        <label className="switch me-3">
            <input type="checkbox" defaultChecked="" checked={isDark} onClick={() => {
                setMode(isDark ? 'light' : 'dark'); setTheme(null);
            }} />
            <span className="slider round" />
        </label>
    );
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