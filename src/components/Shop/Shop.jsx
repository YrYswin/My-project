import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/products'

import Item from './Item'
import plant from '../../assets/image/plant.png'

import './Shop.css'

function Shop() {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  const [category, setCategory] = useState('all')
  const [activePage, setActivePage] = useState('allPlants')
  const isProductsLoading = products.status === 'loading';

  const filterCategory = (now) => {
    if (now === category) {
      setCategory('all')
    } else {
      setCategory(now)
    }
  }

  const nowCategory = category === 'all' ? products.items : products.items.filter((product) => product.category === category)

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const changePage = (page) => {
    setActivePage(page)
  }

  return (
    <>
      <div className='shopPage'>
        <div className="filter">
          <div className="categories">
            <h1>Categories</h1>
            <div onClick={() => filterCategory('house')}><p>House Plant</p><span>(10)</span></div>
            <div onClick={() => filterCategory('potter-plant')}><p>Potter Plants</p><span>(10)</span></div>
            <div onClick={() => filterCategory('seeds')}><p>Seeds</p><span>(10)</span></div>
            <div onClick={() => filterCategory('small')}><p>Small Plants</p><span>(10)</span></div>
            <div onClick={() => filterCategory('large')}><p>Big Plants</p><span>(10)</span></div>
            <div onClick={() => filterCategory('suucelent')}><p>Succelent</p><span>(10)</span></div>
            <div onClick={() => filterCategory('terrarium')}><p>Terrariums</p><span>(10)</span></div>
            <div onClick={() => filterCategory('gardening')}><p>Gardening</p><span>(10)</span></div>
            <div onClick={() => filterCategory('accesories')}><p>Accesories</p><span>(10)</span></div>
          </div>

          <div className="priceRange">
            <h1>Price Range</h1>

            <div className="price">
              <input type="range" name="" id="" />
              <p>Price: <span>$39-$1230</span></p>
            </div>
            <button>Filter</button>
          </div>

          <div className="size">
            <h1>Size</h1>
            <div><p>Small</p><span>(119)</span></div>
            <div><p>Medium</p><span>(119)</span></div>
            <div><p>Large</p><span>(119)</span></div>
          </div>

          <div className="sale">
            <img src={plant} alt="" />
          </div>
        </div>

        <div className="shopping">
          <div className="sorting d-flex">
            <div className='selecting d-flex'>
              <ol className={activePage === 'allPlants' ? 'activeShopPage' : ''} onClick={() => changePage('allPlants')}>All Plants</ol>
              <ol className={activePage === 'newArrivals' ? 'activeShopPage' : ''} onClick={() => changePage('newArrivals')}>New Arrivals</ol>
              <ol className={activePage === 'sale' ? 'activeShopPage' : ''} onClick={() => changePage('sale')}>Sale</ol>
            </div>
            <div className='select d-flex'>
              <div>Short by: </div>
              <select name="sale" id="sale">
                <option value="1">Default sorting</option>
                <option value="2">Default sorting</option>
                <option value="3">Default sorting</option>
                <option value="4">Default sorting</option>
              </select>
            </div>
          </div>

          {activePage === 'allPlants' && <div className="market">

            {
              nowCategory.map((item) => isProductsLoading ? (
                <Item key={item._id} isLoading={true} />
              ) : (
                <Item key={item._id} data={item} />
              ))
            }

          </div>}
          {activePage === 'newArrivals' && <div className="market">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>}
          {activePage === 'sale' && <div className="market">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>}

        </div>
      </div>
      <div className='changePage'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>{`>`}</li>
        </ul>
      </div>
    </>
  )
}

export default Shop