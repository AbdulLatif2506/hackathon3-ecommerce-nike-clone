import React from 'react'
import Filter from '../components/Filter'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'


const page = () => {
  return (
    <div>
      <Filter />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
      <Sidebar />
      <Products />
      </div>
    </div>
  )
}

export default page