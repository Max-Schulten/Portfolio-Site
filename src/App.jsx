import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Tooltip } from '@nextui-org/react'
import logoNoBg from './assets/logo-nobg.svg'
import './app.css'
import { faCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'


function App() {

  return (
    <BrowserRouter>
      <Navbar className='bg-transparent nav overflow-hidden'>
        <NavbarBrand>
          <Link to='/'><Image src={logoNoBg} width={100} radius='none'></Image></Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Tooltip showArrow={false} content='My projects.' className='tooltip'>
              <Link to='/projects' className='navlink'><FontAwesomeIcon icon={faCode} /></Link>
            </Tooltip>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Tooltip showArrow={false} content='More about me.' className='tooltip'>
            <Link to='/about' className='navlink'><FontAwesomeIcon icon={faUser} /></Link>
            </Tooltip>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
