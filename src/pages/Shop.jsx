import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../axios';

import ItemDescription from '../components/ShopItem/ItemDescription'
import ShopItem from '../components/ShopItem/ShopItem'
import ReletedProducts from '../components/ShopItem/ReletedProducts'

function Shop() {
  const [data, setData] = useState()
  // const [isLoading, setLoading] = useState(true)
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/plants/${id}`)
      .then(res => {
        setData(res.data);
        // setLoading(false);
      })
      .catch(err => {
        console.warn(err)
        alert('У тебя ошибка при получений продукта')
      })
  }, [])

  console.log(data)
  return (
    <div>
      <ShopItem />
      <ItemDescription />
      <ReletedProducts />
    </div>
  )
}

export default Shop