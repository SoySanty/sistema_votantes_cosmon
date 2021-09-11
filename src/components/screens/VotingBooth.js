import React, { useState } from 'react'
import Menu from '../components/Menu'
import '../styles/screens/votingBooth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faCheck,
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
   
   const [check, setCheck] = useState(null);
   
   return (
      <div className="screen-container">
         
         <Menu target="voting" />

      
         <div className="card-container">
            <h1 className="title-voting-booth">Lista de candidatos</h1>
            <div className="card-list">

               <div className="card-item">
                  <div className="profile-item">
                     <img src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t31.18172-8/21014069_851165618384625_3167182053034992412_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=EQDPMGIWV6AAX_Xo3eF&tn=RG1XhZiA1kMMKCTF&_nc_ht=scontent.fvvi1-2.fna&oh=6f16f150e707ecc9a86e5545fdd0acfe&oe=6126C2C7" alt="" />
                  </div>
                  <p className="candidate-name">Saul Arias</p>
                  <div 
                  className="voting-check"
                  onClick={()=>{
                     setCheck(1)
                  }}
                  >
                     {
                        check === 1 ? 
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        : ""
                     }
                  </div>
               </div>

               <div className="card-item">
                  <div className="profile-item">
                     <img src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t31.18172-8/21014069_851165618384625_3167182053034992412_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=EQDPMGIWV6AAX_Xo3eF&tn=RG1XhZiA1kMMKCTF&_nc_ht=scontent.fvvi1-2.fna&oh=6f16f150e707ecc9a86e5545fdd0acfe&oe=6126C2C7" alt="" />
                  </div>
                  <p className="candidate-name">Lorenzo Santiago Saul Arias Villegas</p>
                  <div 
                  className="voting-check"
                  onClick={()=>{
                     setCheck(2)
                  }}
                  >
                     {
                        check === 2 ? 
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        : ""
                     }
                  </div>
               </div>

               <div className="card-item">
                  <div className="profile-item">
                     <img src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t31.18172-8/21014069_851165618384625_3167182053034992412_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=EQDPMGIWV6AAX_Xo3eF&tn=RG1XhZiA1kMMKCTF&_nc_ht=scontent.fvvi1-2.fna&oh=6f16f150e707ecc9a86e5545fdd0acfe&oe=6126C2C7" alt="" />
                  </div>
                  <p className="candidate-name">Lorenzo Santiago Saul Arias Villegas</p>
                  <div 
                  className="voting-check"
                  onClick={()=>{
                     setCheck(3)
                  }}
                  >
                     {
                        check === 3 ? 
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        : ""
                     }
                  </div>
               </div>

               <div className="card-item">
                  <div className="profile-item">
                     <img src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t31.18172-8/21014069_851165618384625_3167182053034992412_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=EQDPMGIWV6AAX_Xo3eF&tn=RG1XhZiA1kMMKCTF&_nc_ht=scontent.fvvi1-2.fna&oh=6f16f150e707ecc9a86e5545fdd0acfe&oe=6126C2C7" alt="" />
                  </div>
                  <p className="candidate-name">Lorenzo Santiago Saul Arias Villegas</p>
                  <div 
                  className="voting-check"
                  onClick={()=>{
                     setCheck(4)
                  }}
                  >
                     {
                        check === 4 ? 
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        : ""
                     }
                  </div>
               </div>

               <div className="card-item">
                  <div className="profile-item">
                     <img src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t31.18172-8/21014069_851165618384625_3167182053034992412_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=EQDPMGIWV6AAX_Xo3eF&tn=RG1XhZiA1kMMKCTF&_nc_ht=scontent.fvvi1-2.fna&oh=6f16f150e707ecc9a86e5545fdd0acfe&oe=6126C2C7" alt="" />
                  </div>
                  <p className="candidate-name">Lorenzo Santiago Saul Arias Villegas</p>
                  <div 
                  className="voting-check"
                  onClick={()=>{
                     setCheck(5)
                  }}
                  >
                     {
                        check === 5 ? 
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        : ""
                     }
                  </div>
               </div>

            </div>

         </div>
         
      </div>
   )
}

export default Home
