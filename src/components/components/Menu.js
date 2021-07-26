import React from 'react'
import '../styles/components/menu.css'
import {ReactComponent as LogoSvg} from '../img/logo.svg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBars,
} from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
   return (
      <header className="menu-container"> 
         <Link to="/" className="logo-container">
            <LogoSvg />
            <p>COSMON</p>
         </Link>
         
         <nav className="menu-content">

            <label htmlFor="menuBars" id="labelMenuBars">
               <FontAwesomeIcon icon={faBars} className="icon" />
            </label>
            <input type="checkbox" id="menuBars" />

            <ul className="menu-list">
               <li>Opcion1</li>
               <li>Opcion2</li>
            </ul>

         </nav>
      </header>
   )
}

export default Menu
