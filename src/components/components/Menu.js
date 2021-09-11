import React from 'react'
import '../styles/components/menu.css'
import {ReactComponent as LogoSvg} from '../img/logo.svg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBars,
   faVoteYea,
   faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

const Menu = props => {

	const { target = "home", btnFn = ()=>{} } = props

   const menuBar = {
       home: <>
			<LogoSvg />
			<p>COSMON</p>
		 </>,
       voting: <><FontAwesomeIcon icon={faChevronLeft} className="icon" /><p>VOLVER</p></>
   }
   
   return (
      <header className="menu-container"> 
         <Link to="/" className="logo-container">
            { menuBar[target] }
         </Link>
         
         <nav className="menu-content">

            <label htmlFor="menuBars" id="labelMenuBars">
               <FontAwesomeIcon icon={faBars} className="icon" />
            </label>
            <input type="checkbox" id="menuBars" />

            {
					target === "voting" ?
					<div 
					className="btn-vote"
					onClick={btnFn}
					>
						<FontAwesomeIcon icon={faVoteYea} className="icon" />
						VOTAR
					</div>
					: <p className="user-name">Lorenzo Santiago Saul Arias Villegas</p>
				}

         </nav>
      </header>
   )
}

export default Menu
