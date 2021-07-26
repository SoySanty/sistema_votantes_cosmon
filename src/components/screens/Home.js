import React from 'react'
import Menu from '../components/Menu'
import '../styles/screens/home.css'

const Home = () => {
   return (
      <div className="screen-container">
         
         <Menu />

         <div className="home-container">
            <div className="screen-box"></div>
            <div className="screen-box"></div>
         </div>
         
      </div>
   )
}

export default Home
