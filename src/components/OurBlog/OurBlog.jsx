import React from 'react'

import plant from '../../assets/image/plant.png'

import './OurBlog.css'

function OurBlog() {
   return (
      <div className='ourBlog'>
         <div>
            <h1>Our Blog Posts</h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
         </div>

         <div className='ourBlogList'>
            <div className='blogs'>
               <img src={plant} alt="title" />
               <div className="titleBlog">
                  <h5>Septembers 12 | Read an 6 minuts</h5>
                  <h2>Cactus & Succelent Care Tips</h2>
                  <p>Cactus succelents are easy care plants for any home or patio.</p>
                  <span>Read More {`>`}</span>
               </div>
            </div>

            <div className='blogs'>
               <img src={plant} alt="title" />
               <div className="titleBlog">
                  <h5>Septembers 12 | Read an 6 minuts</h5>
                  <h2>Cactus & Succelent Care Tips</h2>
                  <p>Cactus succelents are easy care plants for any home or patio.</p>
                  <span>Read More {`>`}</span>
               </div>
            </div>

            <div className='blogs'>
               <img src={plant} alt="title" />
               <div className="titleBlog">
                  <h5>Septembers 12 | Read an 6 minuts</h5>
                  <h2>Cactus & Succelent Care Tips</h2>
                  <p>Cactus succelents are easy care plants for any home or patio.</p>
                  <span>Read More {`>`}</span>
               </div>
            </div>

            <div className='blogs'>
               <img src={plant} alt="title" />
               <div className="titleBlog">
                  <h5>Septembers 12 | Read an 6 minuts</h5>
                  <h2>Cactus & Succelent Care Tips</h2>
                  <p>Cactus succelents are easy care plants for any home or patio.</p>
                  <span>Read More {`>`}</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurBlog