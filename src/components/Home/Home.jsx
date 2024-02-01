import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'
import { filterByPrice } from '../../features/products/productsSlice'

const Home = () => {

  const dispatch = useDispatch()
  const categories = useSelector(( state ) => state.categories)
  const products = useSelector(( state ) => state.products)



  useEffect(() => {
    if(!products.list.length) return

    dispatch(filterByPrice(100))
  }, [dispatch, products.list.length])


  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Trending"/>
      <Categories categories={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={products.filtered} amount={5} title="Less than 100$"/>
    </>
  )
}

export default Home