import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AppRoutes from './Routes/Routes'
import Header from './Header/Header'
import Sidebar from './Sideber/Sidebar'
import Footer from './Footer/Footer'

import { getCategories } from '../features/categories/categoriesSlice'
import { getProducts } from '../features/products/productsSlice'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='app'>
        <Header />
        <div className='container'>
          <Sidebar />
          <AppRoutes />
        </div>
        <Footer />
    </div>
  )
}

export default App