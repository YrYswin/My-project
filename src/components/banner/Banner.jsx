import React from 'react'
import './Banner.css'

import plant from '../../assets/image/plant.png'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
   return (
      <div className='Banner'>
         <Carousel className='carousel'>

            <Carousel.Item>

               <Carousel.Caption>
                  <div className="bannerItem">
                     <div className="titleBanner">
                        <h5>Wellcome to Green Day</h5>
                        <h1>LET'S MAKE A BETTER PLANET</h1>
                        <p> We are online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className='shopNowBtn'>SHOP NOW</button>
                     </div>
                     <img src={plant} text="First slide" className='bannerImg' alt='title' />
                  </div>
               </Carousel.Caption>
               <div className='background'></div>

            </Carousel.Item>

            <Carousel.Item>

               <Carousel.Caption>
                  <div className="bannerItem">
                     <div className="titleBanner">
                        <h5>Wellcome to Green Day</h5>
                        <h1>LET'S MAKE A BETTER PLANET</h1>
                        <p> We are online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className='shopNowBtn'>SHOP NOW</button>
                     </div>
                     <img src={plant} text="First slide" className='bannerImg' alt='title' />
                  </div>
               </Carousel.Caption>
               <div className='background'></div>

            </Carousel.Item>

            <Carousel.Item>

               <Carousel.Caption>
                  <div className="bannerItem">
                     <div className="titleBanner">
                        <h5>Wellcome to Green Day</h5>
                        <h1>LET'S MAKE A BETTER PLANET</h1>
                        <p> We are online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className='shopNowBtn'>SHOP NOW</button>
                     </div>
                     <img src={plant} text="First slide" className='bannerImg' alt='title' />
                  </div>
               </Carousel.Caption>
               <div className='background'></div>

            </Carousel.Item>

         </Carousel>
      </div>
   )
}

export default Banner