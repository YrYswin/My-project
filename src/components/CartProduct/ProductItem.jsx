import React from 'react'
import { useDispatch } from 'react-redux';

import plant from '../../assets/image/plant.png'
import deleteIcon from '../../assets/image/deleteIcon.png'
import { deleteCart } from '../../redux/slices/cartSlice';

const base_URL = 'http://localhost:4444';

function ProductItem({ data }) {
  const dispatch = useDispatch();

  function deleteItemInCarts(item) {
    dispatch(deleteCart(item))
  }
  return (
    <div className="itemCart">
      <div className="itemsName">
        <div className="imgItem">
          <img src={data?.imageUrl ? `${base_URL}${data ? data?.imageUrl : ''}` : plant} alt="plant" />
        </div>
        <div className="nameItem">
          <h4>{data.title}</h4>
          <p>SKU: {data._id}</p>
        </div>
      </div>
      <div className="priceItem">
        <p>${data.price}</p>
      </div>
      <div className="countItem">
        <p>-</p>
        <span>{data.quantity}</span>
        <p>+</p>
      </div>
      <div className="totalItem">
        <p>{data.price * data.quantity}</p>
      </div>
      <div className="deleteItem" onClick={() => deleteItemInCarts(data)}>
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  )
}

export default ProductItem