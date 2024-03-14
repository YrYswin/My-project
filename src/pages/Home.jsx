import React from 'react'

import Banner from '../components/banner/Banner'
import Shop from '../components/Shop/Shop'
import FindMore from '../components/FindMore/FindMore'
import OurBlog from '../components/OurBlog/OurBlog'

function Home() {
   return (
      <div>
         <Banner />
         <Shop />
         <FindMore />
         <OurBlog />
      </div>
   )
}

export default Home