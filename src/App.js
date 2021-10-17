import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Works from './components/Works'
import Contact from './components/Contact'
import { useState } from 'react'
import Menu from './components/Menu'

function App() {

  const [ openMenu,setOpenMenu ] = useState(false);

  return (
    <div className="app">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
