import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import wish from '../../assets/svg/Heart.svg'
import search from '../../assets/svg/Vector.svg'
import Star from '../../assets/svg/star'

import './ShopItem.css'

function ShopItem() {
  const [data, setData] = useState()

  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/plants/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.warn(err)
        alert('У тебя ошибка при получений продукта')
      })
  }, [id])

  console.log(data)
  return (
    <div className='shopItem'>
      <div className="imageItems">
        <div className="itemImages">
          {data?.imagesUrl ?
            (data?.imagesUrl.map((image, index) => (
              <div key={index} className='imagesContainer'>
                <img src={image ? `http://localhost:4444${image}` : ''} alt='miniPicures' />
              </div>
            ))) :
            ('')
          }
        </div>
        <div className="itemImage">
          <img src={data?.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''} alt="itemImage" />
        </div>
        <div className="searchItemshop">
          <img src={search} alt="search" />
        </div>
      </div>

      <div className="overviewItem">
        <div className='itemTitle'>
          <h1>{data?.title}</h1>
          <div className='itemPrices'>
            <span className='price'>{data?.price}</span>
            <div className="starts">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <Star key={index} fill={star <= 4 ? '#ffca28' : 'gray'} />
              ))}
              <p>19 Customer Review</p>
            </div>
          </div>
        </div>

        <div className="descriptionItem">
          <h5>Short Description:</h5>
          <p>{data?.shortDescription} </p>
        </div>

        <div className="sizeItem">
          <h5>Size:</h5>
          <div className="sizeOption">
            <div className='activeSize'>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>

        <div className="counterItem">
          <div className="countItem">
            <div>-</div>
            <div>0</div>
            <div>+</div>
          </div>
          <div className="addCartBtn">
            <button className='buyItem'>BUY NOW</button>
            {/* <button onClick={() => addCart(item)} className='addCart'>ADD CART</button> */}
          </div>
          <div className="addToWishlist">
            <img src={wish} alt="wish" />
          </div>
        </div>

        <div className="information">
          <p>SKU: 123456787890987</p>
          <p>CATEGORIES: Potter Plants</p>
          <p>Tegs: Home, Garden, Plants</p>
          <p>Share this product: In  Tw In Ms</p>
        </div>
      </div>
    </div>
  )
}

export default ShopItem