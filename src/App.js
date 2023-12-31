import './App.css';
import NavBar from './Components/NavBar/Navbar';
import AppBody from './Components/AppBody/AppBody';
// import AppBody from './Components/AppBody/AppBody';
import { useState } from 'react';
import About from './Components/AppBody/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './Components/AppBody/Error';
import SideBar from './Components/SideBar/SideBar';
import './Css/parentAppBody.css'
import NewsMonkey from './Components/AppBody/NewsMonkey';


// DEFAULT APP
// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p> Hello world</p>
//       </header>      
//     </div>

function App() {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState(null);
  return (
    <>
      <BrowserRouter>
      <NavBar title='Reacter' mode={mode} setMode={setMode} theme={theme} setTheme={setTheme} />
      <ParentAppBody mode={mode} theme={theme} setTheme={setTheme}/>
      {/* <SideBar />
      <Routes>
      <Route path='/' element={
          <AppBody mode={mode} theme={theme} setTheme={setTheme} />
        } />
        <Route path='home' element= {
          <AppBody mode={mode} theme={theme} setTheme={setTheme} />
        }/>
        <Route path='about' element = {
          <About theme={theme}/>
          } />
        <Route path='*' element = {
          // <Error404 />
          <AppBody mode={mode} theme={theme} setTheme={setTheme} />
          } />
      </Routes> */}
      </BrowserRouter>
    </>
  );
}

function ParentAppBody({mode, theme, setTheme}) {
  const isDark = mode === 'dark';
  const backgroundColor = theme? theme.layerThree : (!isDark? 'white':'black');
  return (<div className='parent'>
    <div className='child-side' style={{backgroundColor: backgroundColor}}>
    <SideBar mode={mode} theme={theme} setTheme={setTheme}/>
    </div>
    <div className='child-body'>
    <Routes>
      <Route path='/' element={
          <AppBody mode={mode} theme={theme} setTheme={setTheme} />
        } />
        <Route path='home' element= {
          <AppBody mode={mode} theme={theme} setTheme={setTheme} />
        }/>
        <Route path='about' element = {
          <About theme={theme}/>
          } />
        <Route path='newsMonkey' element = {
          <NewsMonkey theme={theme}/>
          } />
        <Route path='*' element = {
          // <Error404 />
          <AppBody mode={mode} theme={theme} setTheme={setTheme} />
          } />
      </Routes>
    </div>
  </div>);
}

export default App;
