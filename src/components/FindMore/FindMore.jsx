import React from 'react'

import './FindMore.css'

import plant from '../../assets/image/plant.png'

function FindMore() {
   return (
      <div className='findMore'>
         <div className="picture">
            <img src={plant} alt="title" />
            <div className="overview">
               <h3>SUMMER CACTUS & SUCCULENTS</h3>
               <p>We are online plant shop offering a wide range of cheap and trendy plants</p>
               <button>Find more</button>
            </div>
         </div>

         <div className="picture">
            <img src={plant} alt="title" />
            <div className="overview">
               <h3>SUMMER CACTUS & SUCCULENTS</h3>
               <p>We are online plant shop offering a wide range of cheap and trendy plants</p>
               <button>Find more</button>
            </div>
         </div>
      </div>
   )
}

export default FindMore