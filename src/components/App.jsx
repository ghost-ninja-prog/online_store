import React from 'react'

import AppRoutes from './Routes/Routes'
import Header from './Header/Header'
import Sidebar from './Sideber/Sidebar'
import Footer from './Footer/Footer'



function App() {
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