import React from 'react'
import HD from './HeaderFooter.module.css'

import logo from '../assets/image/logo.png'
import Ellipse from '../assets/svg/footerImage/Ellipse.svg'
import frame1 from '../assets/svg/footerImage/Frame1.svg'
import group1 from '../assets/svg/footerImage/Group1.svg'
import frame2 from '../assets/svg/footerImage/Frame2.svg'
import group2 from '../assets/svg/footerImage/Group2.svg'
import frame3 from '../assets/svg/footerImage/Frame3.svg'
import group3 from '../assets/svg/footerImage/Group3.svg'
import location from '../assets/svg/footerImage/Location.svg'
import message from '../assets/svg/footerImage/Message.svg'
import calling from '../assets/svg/footerImage/Calling.svg'
import facebook from '../assets/svg/footerImage/Facebook.svg'
import union from '../assets/svg/footerImage/Union.svg'
import twiter from '../assets/svg/footerImage/Twitter.svg'
import instagram from '../assets/svg/footerImage/Instagram.svg'
import linkedin from '../assets/svg/footerImage/Linkedin.svg'
import visa from '../assets/svg/footerImage/visa.svg'
import paypal from '../assets/svg/footerImage/paypal.svg'
import mastercard from '../assets/svg/footerImage/mastercard.svg'
import jcb from '../assets/svg/footerImage/jcb.svg'

function Footer() {
   return (
      <div className={HD.footer}>
         <div className={HD.listOne}>
            <div className={HD.plant}>
               <div>
                  <div className={HD.image}>
                     <img src={Ellipse} alt="" />
                     <img className={HD.img11} src={frame1} alt="" />
                     <img className={HD.img12} src={group1} alt="" />
                  </div>
                  <h2>Garden Care</h2>
                  <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
               </div>

               <div className={HD.border}>
                  <div className={HD.image}>
                     <img src={Ellipse} alt="" />
                     <img className={HD.img21} src={frame2} alt="" />
                     <img className={HD.img22} src={group2} alt="" />
                  </div>
                  <h2>Plant Renovation</h2>
                  <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
               </div>

               <div>
                  <div className={HD.image}>
                     <img src={Ellipse} alt="" />
                     <img className={HD.img31} src={frame3} alt="" />
                     <img className={HD.img32} src={group3} alt="" />
                  </div>
                  <h2>Watering Graden</h2>
                  <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
               </div>
            </div>

            <div className={HD.joinContainer}>
               <h1>Would you like to join newsletters?</h1>
               <div className={HD.joinus}>
                  <input name='email' type="text" autoComplete='email' placeholder='enter your email address...' />
                  <button>Join</button>
               </div>
               <p>We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green) house to yours!</p>
            </div>
         </div>

         <div className={HD.listTwo}>
            <div className={HD.logo}>
               <img src={logo} alt="logo" />
               <div className={HD.title}>
                  <h1>Green Days</h1>
                  <p>"My life, my rules"</p>
               </div>
            </div>

            <div className={HD.link}>
               <div>
                  <img src={location} alt="location" />
                  <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
               </div>

               <div>
                  <img src={message} alt="message" />
                  <p>contact@greendays.com</p>
               </div>

               <div>
                  <img src={calling} alt="calling" />
                  <p>+996 700 111 201</p>
               </div>
            </div>
         </div>

         <div className={HD.listThree}>
            <div className={HD.other}>
               <div>
                  <h2>My account</h2>
                  <p>My accaount</p>
                  <p>Our stores</p>
                  <p>Contact us</p>
                  <p>Career</p>
                  <p>Specials</p>
               </div>

               <div>
                  <h2>Help & Guide</h2>
                  <p>Help Center</p>
                  <p>How to Buy</p>
                  <p>Shipping & Delivery</p>
                  <p>Product Policy</p>
                  <p>How to Return</p>
               </div>

               <div>
                  <h2>Categories</h2>
                  <p>House Plants</p>
                  <p>Potter Plants</p>
                  <p>Seeds</p>
                  <p>Small Plants</p>
                  <p>Accessories</p>
               </div>
            </div>
            <div className={HD.socialMedia}>
               <div className={HD.social}>
                  <h1>Social Media</h1>
                  <div>
                     <div><img src={facebook} alt="" /></div>
                     <div><img src={instagram} alt="" /></div>
                     <div><img src={twiter} alt="" /></div>
                     <div><img src={linkedin} alt="" /></div>
                     <div><img src={union} alt="" /></div>
                  </div>
               </div>

               <div className={HD.paymentMethod}>
                  <h1>We accept</h1>
                  <div className={HD.wallet}>
                     <img src={paypal} alt="" />
                     <img src={visa} alt="" />
                     <img src={mastercard} alt="" />
                     <img src={jcb} alt="" />
                  </div>
               </div>
            </div>
         </div>

         <div className={HD.listFour}>
            <span>©2024 GreenDays. All Rights Reserved.</span>
         </div>

      </div>
   )
}

export default Footer